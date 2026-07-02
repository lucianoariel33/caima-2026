import BackgroundImgSet from "@components/BackgroundImgSet/BackgroundImgSet";
import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function Cta() {
  const { cta } = content.home;
  const { contactButton } = content.ui;

  return (
    <BackgroundImgSet className="cta-img-area cta-img-area--home img-scale" bgUrl={cta.background}>
      <div className="overlay-3"></div>
      <div className="cta-inner text-center">
        <div className="section-title cta-home-stack">
          <div className="image-text-panel">
            <h2 className="text-white">{cta.title}</h2>
          </div>
          <Link to={cta.linkTo} className="theme-btn white-btn cta-home-stack__btn">
            {contactButton}
          </Link>
        </div>
      </div>
    </BackgroundImgSet>
  );
}
