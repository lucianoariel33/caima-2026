import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function FooterSocial() {
  const { socialTitle, social } = content.footer;

  return (
    <div>
      <h5>{socialTitle}</h5>
      <ul>
        <li>
          <div className="social-area">
            {social.map((item) => (
              <Link key={item.name} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}
