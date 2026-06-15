import BackgroundImgSet from "@components/BackgroundImgSet/BackgroundImgSet";
import { Link } from "react-router-dom";
import bgUrl from "/assets/img/cta-bg.jpg";

interface CtaProps {
  title: string;
  subtitle: string;
}

const defaultData: CtaProps = {
  title: " Let's start your new ",
  subtitle: " dream project",
};

export default function Cta() {
  const { title, subtitle } = defaultData;
  return (
    <BackgroundImgSet className="cta-img-area img-scale" bgUrl={bgUrl}>
      <div className="cta-inner text-center">
        <div className="section-title">
          <div>
            <h2 className="text-white visible-slowly-right">
              {title} <br />
              {subtitle}
            </h2>
          </div>
          <Link to="/contact" className="theme-btn white-btn mt-30">
            Contact Us
          </Link>
        </div>
      </div>
    </BackgroundImgSet>
  );
}
