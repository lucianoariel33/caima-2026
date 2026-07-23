import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function AboutSection() {
  const { story } = content.about;

  return (
    <div id="about-page" className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 order-2 order-md-1">
            <div className="section-title">
              <div className="wow fadeInUp">
                <h2>{story.title}</h2>
              </div>
            </div>

            <MobileInfoDisclosure
              summary="Ver información"
              desktopWrapperClassName="about-content-wrap wow fadeInUp"
              mobileClassName="about-content-wrap"
            >
              <h5>{story.paragraphs[0]}</h5>
              {story.paragraphs.slice(1).map((text) => (
                <p key={text}>{text}</p>
              ))}
            </MobileInfoDisclosure>
          </div>

          <div className="col-xl-6 col-lg-6 order-1 order-md-2">
            <div className="about-img-wrap wow img-custom-anim-right">
              <img src={story.image} alt={story.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
