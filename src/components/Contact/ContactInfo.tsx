import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function ContactInfo() {
  const { email, phone, address } = content.site;
  const { contactInfoTitle } = content.ui;
  const { socialTitle, social } = content.footer;

  const contactInfo = [
    email ? { label: "Email", value: email } : null,
    phone ? { label: "Teléfono", value: phone } : null,
    { label: "Dirección", value: address },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="contact-info">
      <div className="contact-info__heading section-title">
        <p>Datos</p>
        <h2>{contactInfoTitle}</h2>
      </div>

      <div className="contact-info-inner">
        {contactInfo.map((item) => (
          <div className="single-contact-info" key={item.label}>
            <p>{item.label}</p>
            <h4>{item.value}</h4>
          </div>
        ))}
      </div>

      <div className="contact-social-panel">
        <div>
          <p>{socialTitle}</p>
          <h3>Seguinos y conocé más obras del estudio.</h3>
        </div>

        <div className="social-area contact-social-links">
          {social.map((item) => (
            <Link to={item.url} key={item.name} aria-label={item.name}>
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
