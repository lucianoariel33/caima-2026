import processImg from "/assets/img/process-img.jpg";

interface ProcessHeroData {
  title: string;
  image: string;
}

const process: ProcessHeroData = {
  title: "We Build with Integrity",
  image: processImg,
};

export default function ProcessHero() {
  const { title, image } = process;

  return (
    <div id="process-2" className="process-section section-padding pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="section-title">
              <h2>{title}</h2>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7">
            <div className="row">
              <div className="process-img-wrap">
                <img src={image} alt={title} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
