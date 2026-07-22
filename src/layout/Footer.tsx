import { Link } from "react-router-dom";

import FooterBottom from "@/layout/FooterContent/FooterBottom";
import FooterBrand from "@/layout/FooterContent/FooterBrand";
import FooterLinksSection from "@/layout/FooterContent/FooterLinksSection";
import FooterOffice from "@/layout/FooterContent/FooterOffice";
import FooterSocial from "@/layout/FooterContent/FooterSocial";
import { content } from "@/content/useContent";

export default function Footer() {
  const { headline, lead } = content.footer;
  const { getInTouchButton } = content.ui;

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-hero">
            <div>
              <p className="footer-hero__eyebrow">{content.site.name}</p>
              <h2>{headline}</h2>
            </div>
            <div className="footer-hero__aside">
              <p>{lead}</p>
              <Link to="/contact" className="footer-hero__link">
                {getInTouchButton}
                <i className="las la-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="footer-up">
            <div className="row gy-5">
              <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <FooterBrand />
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <FooterOffice />
              </div>

              <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <FooterLinksSection />
              </div>

              <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                <FooterSocial />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FooterBottom />
    </>
  );
}
