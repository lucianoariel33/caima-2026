import { content } from "@/content/useContent";

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

            <div className="about-content-wrap wow fadeInUp" data-wow-delay=".3s">
              <h5>{story.paragraphs[0]}</h5>
              {story.paragraphs.slice(1).map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
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
