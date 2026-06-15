interface AboutData {
  title: string;
  image: string;
  paragraphs: string[];
}

const aboutData: AboutData = {
  title: "Our Story",
  image: "/assets/img/about/about-page-img.jpg",
  paragraphs: [
    "Archinix was founded out of a shared desire to create spaces that feel as good as they look — honest, balanced, and deeply personal. With a foundation in architecture and product design, the studio connects people to their environments through refined, purposeful design.",
    "Every project begins with listening. We take the time to understand daily rhythms, personal values, and individual style. From that, we shape tailored interiors that reflect who you are — spaces that work quietly, beautifully, & intuitively.",
    "We oversee every aspect of your interior design project — from initial concept to final installation.",
  ],
};

export default function AboutSection() {
  const { title, image, paragraphs } = aboutData;

  return (
    <div id="about-page" className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 order-2 order-md-1">
            <div className="section-title">
              <div className="wow fadeInUp">
                <h2>{title}</h2>
              </div>
            </div>

            <div className="about-content-wrap wow fadeInUp" data-wow-delay=".3s">
              <h5>{paragraphs[0]}</h5>
              {paragraphs.slice(1).map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 order-1 order-md-2">
            <div className="about-img-wrap wow img-custom-anim-right">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
