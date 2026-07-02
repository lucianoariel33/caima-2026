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
const { header: headerContent } = content;
const { contactButton, getInTouchButton } = content.ui;

export default function Header() {
  const { email, phone } = content.site;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<number | null>(null);
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

  const toggleMobileMenu = (i: number) => {
    setActiveMobileMenu(activeMobileMenu === i ? null : i);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOffcanvasOpen(false);
  };

  // La home usa el hero slider a pantalla completa, que requiere header transparente superpuesto
  const isHomeTwo = location.pathname === "/" || location.pathname === "/home-two";

  return (
    <>
      <div
        className={`overlay ${mobileOpen || offcanvasOpen ? "active" : ""}`}
        onClick={closeAll}
      ></div>

      <div className={`header-area ${isHomeTwo ? "absolute-header" : ""}`}>
        <div id="header-sticky" className={isSticky ? "header-sticky" : ""}>
          <div className={`navigation ${isHomeTwo && !isSticky ? "border-0" : ""}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-4 col-6">
                  <div className="logo">
                    <Link to="/" className="logo">
                      <img src={logos.principal} alt={content.site.name} />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-7 d-none d-lg-block text-lg-end">
                  <div className="main-menu">
                    <NavMenu menu={mainMenu} />
                  </div>
                </div>

                <div className="col-xl-1 col-lg-1 d-none d-lg-inline-block">
                  <div className="header-right">
                    <div
                      className="menu-trigger"
                      onClick={() => setOffcanvasOpen(true)}
                    >
                      <span className="lines"></span>
                      <span className="lines"></span>
                      <span className="lines"></span>
                    </div>
                  </div>
                </div>

                <div className="mobile-nav-bar col-6 d-block d-lg-none">
                  <div className="mobile-nav-wrap">
                    <div id="hamburger" onClick={() => setMobileOpen(true)}>
                      <i className="las la-bars"></i>
                    </div>

                    <div className={`mobile-nav ${mobileOpen ? "show" : ""}`}>
                      <button className="close-nav" onClick={closeAll}>
                        <i className="las la-times-circle"></i>
                      </button>

                      <nav className="sidebar-nav">
                        <ul className="metismenu" id="mobile-menu">
                          {mainMenu.map((item, index) => (
                            <li key={index}>
                              {item.submenu ? (
                                <>
                                  <Link
                                    to={"#"}
                                    className={`has-arrow ${item.submenu.some(
                                      (sub) => location.pathname === sub.to
                                    )
                                      ? "active"
                                      : ""
                                      }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleMobileMenu(index);
                                    }}
                                  >
                                    {item.name}
                                  </Link>

                                  <ul
                                    className={`sub-menu collapse ${activeMobileMenu === index ? " in" : ""
                                      }`}
                                    style={{
                                      display:
                                        activeMobileMenu === index
                                          ? "block"
                                          : "none",
                                    }}
                                  >
                                    {item.submenu.map((sub, i) => (
                                      <li key={i}>
                                        <NavLink
                                          to={sub.to}
                                          onClick={closeAll}
                                          className={({ isActive }) =>
                                            isActive ? "active" : ""
                                          }
                                        >
                                          {sub.name}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : (
                                <NavLink
                                  to={item.to || "#"}
                                  onClick={closeAll}
                                  className={({ isActive }) =>
                                    isActive ? "active" : ""
                                  }
                                >
                                  {item.name}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>

                      <div className="action-bar">
                        {email && (
                          <Link to={`mailto:${email}`}>
                            <i className="las la-envelope"></i>{email}
                          </Link>
                        )}
                        {phone && (
                          <Link to={`tel:${phone}`}>
                            <i className="las la-phone"></i>{phone}
                          </Link>
                        )}
                        <Link to="/contact" className="theme-btn">
                          {contactButton}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT OFFCANVAS */}
      <div className={`extra-info ${offcanvasOpen ? "active" : ""}`}>
        <div className="close-icon menu-close">
          <button onClick={closeAll}>
            <i className="las la-times"></i>
          </button>
        </div>

        <div className="logo-side">
          <Link to="/" className="logo">
            <img src={logos.principal} alt={content.site.name} />
          </Link>
        </div>

        <div className="side-info">
          <div className="contact-list mb-40">
            <p>{headerContent.offcanvasText}</p>
            <img src={headerContent.offcanvasImage} alt="" />

            <div className="mt-30 mb-30">
              <Link to="/contact" className="white-btn">
                {getInTouchButton}
              </Link>
            </div>
          </div>

          <div className="social-area-wrap">
            {content.footer.social.map((item) => (
              <Link to={item.url} key={item.name}>
                <i className={item.icon}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
