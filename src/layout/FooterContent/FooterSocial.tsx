import { content } from "@/content/useContent";

export default function FooterSocial() {
  const { socialTitle, social } = content.footer;

  return (
    <div className="footer-social">
      <h5>{socialTitle}</h5>
      <div className="social-area">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.url}
            aria-label={item.name}
            target="_blank"
            rel="noreferrer"
          >
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
