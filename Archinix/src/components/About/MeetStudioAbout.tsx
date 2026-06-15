import { Link } from "react-router-dom";

interface StudioAboutData {
  title: string;
  subtitle: string;
  description: string;
}

const defaultData: StudioAboutData = {
  title: "Meet The Studio",
  subtitle: "Who we are",
  description:
    "Archinix is an award-winning modern architecture firm based in London. We specialize in contemporary design through our signature Natural Modern approach. We involves in many different disciplines including urban planning, landscape architecture, interior design, civil engineering, structural engineering.",
};

export default function MeetStudioAbout() {
  const { title, subtitle, description } = defaultData;
  return (
    <div className="about-section gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title ">
              <h6>{subtitle}</h6>
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="about-content-wrap">
              <h3 className="visible-slowly-right p-xl ">{description}</h3>
              <br />
              
              <Link className="link-text mt-30 wow tpfadeUp" to={"/about"}>
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
