import { Link } from "react-router-dom";

interface FooterContact {
  office: string;
  emailLabel: string;
  email: string;
  time: string;
  phone: string;
}

const footerContact: FooterContact = {
  office: "Corporate Office- 175 24th Street, OT-35 London, UK 265",
  emailLabel: "Have a project in mind?",
  email: "info@archinix.com",
  time: "Mon-Fri, 08.00 AM-09.00 PM",
  phone: "+18-4675826",
};

export default function FooterOffice() {
  return (
    <div>
      <h5>Office</h5>
      <p className="me-5">{footerContact.office}</p>

      <div className="company-email">
        <p>{footerContact.emailLabel}</p>
        <Link to={`mailto:${footerContact.email}`}>{footerContact.email}</Link>
      </div>

      <div className="phone-number">
        <p>{footerContact.time}</p>
        <Link to={`tel:${footerContact.phone}`}>{footerContact.phone}</Link>
      </div>
    </div>
  );
}
