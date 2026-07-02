import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function FooterBrand() {
  const { logos, name } = content.site;
  const { brandText } = content.footer;

  return (
    <>
      <Link to="/" className="logo">
        <img src={logos.principal} alt={name} />
      </Link>
      <p>{brandText}</p>
    </>
  );
}
