const DEFAULT_TO_EMAIL = "info@caimarisarq.com.ar";

function respond(res, status, payload) {
  res.status(status).json(payload);
}

function normalize(value, maxLength = 1000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPayload(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, { error: "Metodo no permitido." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Caimaris [arq] <onboarding@resend.dev>";

  if (!apiKey) {
    return respond(res, 503, { error: "El formulario no esta configurado." });
  }

  const payload = getPayload(req);
  const name = normalize(payload.name, 120);
  const email = normalize(payload.email, 160);
  const phone = normalize(payload.phone, 40);
  const message = normalize(payload.message, 4000);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\s().-]{7,30}$/;

  if (!name || !emailRegex.test(email) || !phoneRegex.test(phone) || !message) {
    return respond(res, 400, { error: "Revisa los datos del formulario." });
  }

  const subject = `Nueva consulta web de ${name}`;
  const text = [
    "Nueva consulta desde caimarisarq.com.ar",
    "",
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Telefono: ${phone}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  const html = `
    <h2>Nueva consulta desde caimarisarq.com.ar</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend contact error:", response.status, detail);
    return respond(res, 502, { error: "No se pudo enviar el mensaje." });
  }

  return respond(res, 200, { ok: true });
}
