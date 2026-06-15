import AboutProgress from "./AboutProgress";

interface AboutSectionData {
  subtitle: string;
  title: string;
  text: string;
  image: string;
}

const aboutData: AboutSectionData = {
  subtitle: "About Us",
  title: "Architecture Renovation",
  text: "We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion. Since the 1980s, as the complexity of buildings began to increase, the field of architecture technological expertise.",
  image: "/assets/img/about/1-1.jpg",
};

export default function ArchitectureAbout() {
  return (
    <div className="about-section section-padding border-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="about-content-wrapper">
              <div className="section-title">
                <h6>{aboutData.subtitle}</h6>
                <h2>{aboutData.title}</h2>
              </div>

              <div className="p-animation">
                <p>{aboutData.text}</p>
              </div>
              <AboutProgress />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="about-img-wrapper wow img-custom-anim-right">
              <img src={aboutData.image} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
