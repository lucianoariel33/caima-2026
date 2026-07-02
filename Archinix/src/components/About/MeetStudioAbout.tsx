import { content } from "@/content/useContent";

export default function MeetStudioAbout() {
  const { about } = content.home;

  return (
    <div className="about-section about-section--home-studio gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title ">
              <h2>{about.title}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="about-content-wrap">
              <h3 className="visible-slowly-right p-xl ">{about.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
