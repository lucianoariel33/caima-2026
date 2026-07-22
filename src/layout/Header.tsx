import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavMenu from "@/layout//HeaderContent/NavMenu";
import { content } from "@/content/useContent";

interface SubmenuItem {
  name: string;
  to: string;
}
interface MenuItem {
  name: string;
  to?: string;
  submenu?: SubmenuItem[];
}

const { logos } = content.site;
const mainMenu = content.navigation as MenuItem[];
const { contactButton } = content.ui;

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // La home usa el hero slider a pantalla completa, que requiere header transparente superpuesto
  const isHomeTwo = location.pathname === "/" || location.pathname === "/home-two";

  return (
    <>
      <div className={`header-area ${isHomeTwo ? "absolute-header" : ""}`}>
        <div id="header-sticky" className={isSticky ? "header-sticky" : ""}>
          <div className={`navigation ${isHomeTwo && !isSticky ? "border-0" : ""}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-3 col-7">
                  <div className="logo">
                    <Link to="/" className="logo">
                      <img src={logos.principal} alt={content.site.name} />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-9 d-none d-lg-block text-lg-end">
                  <div className="main-menu">
                    <NavMenu menu={mainMenu} />
                  </div>
                </div>

                <div className="col-5 d-lg-none text-end">
                  <NavLink to="/contact" className="header-mobile-contact">
                    {contactButton}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
