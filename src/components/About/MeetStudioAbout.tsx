import { Link } from "react-router-dom";
import { content } from "@/content/useContent";

export default function MeetStudioAbout() {
  const { about } = content.home;
  const { moreAboutLink } = content.ui;
  const highlights = [
    { value: "+30", label: "años de trayectoria" },
    { value: "+45.000", label: "m² construidos" },
    { value: "360°", label: "proyecto, gestión y obra" },
  ];

  return (
    <div className="about-section about-section--home-studio gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title ">
              <h6>{about.subtitle}</h6>
              <h2>{about.title}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="about-content-wrap">
              <h3 className="visible-slowly-right p-xl ">{about.description}</h3>
              <div className="about-section--home-studio__highlights">
                {highlights.map((item) => (
                  <div className="about-section--home-studio__highlight" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to={about.linkTo} className="link-text about-section--home-studio__link">
                {moreAboutLink} <i className="las la-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
