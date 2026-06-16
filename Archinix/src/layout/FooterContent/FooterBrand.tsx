import { Link } from "react-router-dom";
const logo = "/ESTRUCTURA/logo_blanco.png";

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
