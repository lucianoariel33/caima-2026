import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

export default function ProjectGridItem() {
  return (
    <div id="project-grid" className="project-grid project-section pt-60 pb-90">
      <div className="container-fluid">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index % 4 + 1)}s`} key={project.id}>
              <Link
                to={`/project-details/${project.slug}`}
                className="single-project-item"
              >
                <div className="project-bg">
                  <img src={project.cover} alt={project.title} loading="lazy" />
                </div>
                <div className="project-info">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
