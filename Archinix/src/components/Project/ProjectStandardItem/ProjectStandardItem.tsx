import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

export default function ProjectStandardItem() {
  return (
    <div id="project-standard" className="project-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          {projects.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index % 3 + 1)}s`} key={item.id}>
              <Link
                to={`/project-details/${item.slug}`}
                className="single-project-wrapper"
              >
                <div className="project-img">
                  <img src={item.cover} alt={item.title} loading="lazy" />
                </div>
                <div className="project-title">
                  <h3>{item.title}</h3>
                  <h6>{item.category}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
