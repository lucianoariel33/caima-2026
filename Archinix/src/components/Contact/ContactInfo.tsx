import { Link } from "react-router-dom";

interface ContactInfoItem {
  label: string;
  value: string;
}

interface SocialLink {
  icon: string;
}

const contactInfo: ContactInfoItem[] = [
  { label: "Email", value: "info@archinix.com" },
  { label: "Phone", value: "(123) 456-7890" },
  { label: "Address", value: "123, Main Street, California, USA" },
];

const socialLinks: SocialLink[] = [
  { icon: "fab fa-facebook-f" },
  { icon: "fab fa-instagram" },
  { icon: "fab fa-linkedin-in" },
  { icon: "fab fa-skype" },
];
export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="section-title">
        <h2>
          Contact Info{" "}
          <span>
            <i className="las la-arrow-right"></i>
          </span>
        </h2>
      </div>

      <div className="contact-info-inner">
        {contactInfo.map((item, index) => (
          <div className="single-contact-info" key={index}>
            <p>{item.label}</p>
            <h4>{item.value}</h4>
          </div>
        ))}

        <div className="social-area">
          {socialLinks.map((item, index) => (
            <Link to="#" key={index}>
              <i className={item.icon}></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
