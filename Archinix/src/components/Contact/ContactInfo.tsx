import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function ContactInfo() {
  const { email, phone, address } = content.site;
  const { contactInfoTitle } = content.ui;
  const { social } = content.footer;

  const contactInfo = [
    email ? { label: "Email", value: email } : null,
    phone ? { label: "Teléfono", value: phone } : null,
    { label: "Dirección", value: address },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="contact-info">
      <div className="section-title">
        <h2>
          {contactInfoTitle}{" "}
          <span>
            <i className="las la-arrow-right"></i>
          </span>
        </h2>
      </div>

      <div className="contact-info-inner">
        {contactInfo.map((item) => (
          <div className="single-contact-info" key={item.label}>
            <p>{item.label}</p>
            <h4>{item.value}</h4>
          </div>
        ))}

        <div className="social-area">
          {social.map((item) => (
            <Link to={item.url} key={item.name}>
              <i className={item.icon}></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
