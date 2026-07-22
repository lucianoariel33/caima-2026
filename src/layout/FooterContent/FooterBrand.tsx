import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function FooterBrand() {
  const { logos, name } = content.site;
  const { brandTitle, brandText, servicesTitle, services } = content.footer;

  return (
    <div className="footer-brand">
      <h5 className="footer-brand__title">{brandTitle}</h5>
      <p>{brandText}</p>

      <Link to="/" className="footer-brand__logo" aria-label={name}>
        <img src={logos.principal} alt="" />
      </Link>

      <div className="footer-specialties">
        <span>{servicesTitle}</span>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
