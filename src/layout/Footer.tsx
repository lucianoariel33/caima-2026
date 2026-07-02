import FooterBottom from "@/layout/FooterContent/FooterBottom";
import FooterBrand from "@/layout/FooterContent/FooterBrand";
import FooterLinksSection from "@/layout/FooterContent/FooterLinksSection";
import FooterOffice from "@/layout/FooterContent/FooterOffice";
import FooterSocial from "@/layout/FooterContent/FooterSocial";

export default function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-up">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <FooterBrand />
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <FooterOffice />
              </div>

              <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <FooterLinksSection />
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
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
