import { Link } from "react-router-dom";

interface SocialItem {
  name: string;
  url: string;
}

const socialLinks: SocialItem[] = [
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Medium", url: "#" },
];
export default function FooterSocial() {
  return (
    <div>
      <h5>Follow Us</h5>
      <ul>
        <li>
          <div className="social-area">
            {socialLinks.map((item, index) => (
              <Link key={index} to={`/${item.url}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}
