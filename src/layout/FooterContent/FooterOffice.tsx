import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function FooterOffice() {
  const { address, email, schedule, phone } = content.site;
  const { officeTitle } = content.footer;
  const { projectInMind } = content.ui;

  return (
    <div className="footer-contact">
      <h5>{officeTitle}</h5>
      <p className="footer-contact__address">{address}</p>

      <div className="company-email">
        <p>{projectInMind}</p>
        {email && <Link to={`mailto:${email}`}>{email}</Link>}
      </div>

      <div className="phone-number">
        <p>{schedule}</p>
        {phone && <Link to={`tel:${phone}`}>{phone}</Link>}
      </div>
    </div>
  );
}
