interface FooterLinks {
  title: string;
  links: { name: string; to: string }[];
}

const footerLinks: FooterLinks = {
  title: "Links",
  links: [
    { name: "Company", to: "about" },
    { name: "Careers", to: "contact" },
    { name: "Press Media", to: "blogs" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "project-standard" },
  ],
};
import { Link } from "react-router-dom";

export default function FooterLinksSection() {
  return (
    <div>
      <h5>{footerLinks.title}</h5>
      <ul>
        <li>
          {footerLinks.links.map((link, index) => (
            <Link to={`/${link.to}`} key={index}>
              {link.name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}
