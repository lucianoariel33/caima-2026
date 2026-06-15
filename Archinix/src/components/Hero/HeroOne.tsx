import bannerImg from "/assets/img/banner.jpg";

interface HeroData {
  title: string;
  description: string;
  bannerimg: string;
}

const defaultData: HeroData = {
  title: "AWARD WINNING ARCHITECT STUDIO",
  description:
    "We are a London-based architecture and design firm with a global reputation for creating innovative spaces.",
  bannerimg: bannerImg,
};

export default function HeroOne() {
  const { title, description, bannerimg } = defaultData;
  return (
    <section className="hero section-padding px-2 pt-60 pt-md-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7 col-md-7 col-sm-9">
            <div className="section-title">
              <div>
                <h1 className="visible-slowly-right">{title}</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-5 wow fadeInUp" data-wow-delay=".6s">
            <div className="p-animation">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="hero-img-wrap mt-30 wow fadeInUp animated" data-wow-delay=".6s">
          <img src={bannerimg} alt="Hero banner" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
