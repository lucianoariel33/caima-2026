import { Link } from "react-router-dom";
import logo from "/assets/img/logo/logo-white.png";

export default function FooterBrand() {
  return (
    <>
      <Link to="/" className="logo">
        <img src={logo} alt="Archinix Logo" />
      </Link>
      <p>
        We are the top architecture firm <br />
        delivering the best works. Innovative <br />
        services highly customized.
      </p>
    </>
  );
}
