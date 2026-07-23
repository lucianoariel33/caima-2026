import AboutProgress from "./AboutProgress";
import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function ArchitectureAbout() {
  const { architecture } = content.about;

  return (
    <div className="about-section section-padding border-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="about-content-wrapper">
              <div className="section-title">
                <h6>{architecture.subtitle}</h6>
                <h2>{architecture.title}</h2>
              </div>

              <MobileInfoDisclosure
                summary="Ver enfoque"
                desktopWrapperClassName="p-animation"
                mobileClassName="p-animation"
              >
                <p>{architecture.description}</p>
                <AboutProgress />
              </MobileInfoDisclosure>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="about-img-wrapper wow img-custom-anim-right">
              <img src={architecture.image} alt={architecture.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
