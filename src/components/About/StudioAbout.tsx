import { Link } from "react-router-dom";

interface StudioAboutData {
  title: string;
  subtitle: string;
  description: string;
  extraParagraphs: string[];
}

const defaultData: StudioAboutData = {
  title: "The Studio",
  subtitle: "About",
  description:
    "Archinix is a team of experienced architects and  interior designers -",
  extraParagraphs: [
    "who are passionate about creating beautiful, functional spaces. We believe that good design should be accessible to everyone, and we work hard to make sure that our clients visions become a reality.",
    " We involves in many different disciplines including urban planning, landscape architecture, interior design, civil engineering, structural engineering, building physics, materials science and construction technology.",
  ],
};

export default function StudioAbout() {
  const { title, subtitle, description, extraParagraphs } = defaultData;
  return (
    <div className="about-section section-padding px-2 pt-0 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="section-title">
              <h6>{subtitle}</h6>
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="about-content-wrap">
              <h3 className="visible-slowly-right">{description}</h3>
              <br />
              <div className="p-animation">
                {extraParagraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link className="link-text mt-30 wow tpfadeUp" to={"/about"}>
                More About Us
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
