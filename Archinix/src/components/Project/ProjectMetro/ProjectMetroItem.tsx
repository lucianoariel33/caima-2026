import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

export default function ProjectMetroItem() {
  const bigItem = projects[0];

  return (
    <div id="project-metro" className="project-section pt-60">
      <div className="row gx-0">
        {bigItem && (
          <div className="col-xl-12 col-lg-12 col-md-12 wow img-custom-anim-left">
            <Link
              to={`/project-details/${bigItem.slug}`}
              className="single-project-wrap big"
            >
              <img src={bigItem.cover} alt={bigItem.title} loading="lazy" />
              <div className="details">
                <div className="info">
                  <h5>{bigItem.title}</h5>
                  <h6>{bigItem.category}</h6>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
