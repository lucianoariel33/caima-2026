import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function FooterLinksSection() {
  const { linksTitle, links } = content.footer;

  return (
    <div>
      <h5>{linksTitle}</h5>
      <ul>
        <li>
          {links.map((link) => (
            <Link to={`/${link.to}`} key={link.to}>
              {link.name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}
