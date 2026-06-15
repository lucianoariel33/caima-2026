import BackgroundImgSet from "@components/BackgroundImgSet/BackgroundImgSet";
import { Link } from "react-router-dom";
import bgUrl from "/assets/img/cta-bg-3.jpg";

interface CtaProps {
  title?: string;
  imgUrl?: string;
}

const defaultData: Required<CtaProps> = {
  title: "Let’s work together",
  imgUrl: bgUrl,
};

export default function CtaContact({
  title = defaultData.title,
  imgUrl = defaultData.imgUrl,
}: CtaProps) {
  return (
    <BackgroundImgSet
      className="cta-img-area img-scale styletwo"
      bgUrl={imgUrl}
    >
      <div className="overlay-3"></div>
      <div className="cta-inner text-center">
        <div className="section-title">
          <div className="heading-animation">
            <h2 className="text-white visible-slowly-right">{title}</h2>
          </div>
          <Link to="/contact" className="theme-btn white-btn mt-30 wow fadeInUp" data-wow-delay=".3s">
            Contact Us
          </Link>
        </div>
      </div>
    </BackgroundImgSet>
  );
}
