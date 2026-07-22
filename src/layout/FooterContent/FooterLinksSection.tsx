import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function FooterLinksSection() {
  const { linksTitle, links } = content.footer;

  return (
    <div className="footer-links">
      <h5>{linksTitle}</h5>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={`/${link.to}`} key={link.to}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
