import { Link } from "react-router-dom";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import { projects } from "@/content/projects";

export default function RecentProject() {
  return (
    <div id="project-1" className="project-section section-padding pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <SectionHeading subtitle="The Work" title="Recent Project" />
          </div>
        </div>
        <div className="row gx-5 mt-30">
          {projects.slice(0, 4).map((project, index) => (
            <div className="col-xl-6 col-lg-6 col-md-6" key={project.id}>
              <Link
                to={`/project-details/${project.slug}`}
                className="single-project-item"
              >
                <div
                  className={`project-img wow img-custom-anim-${index % 2 === 0 ? "left" : "right"
                    }`}
                  data-wow-delay={`${index % 2 === 0 ? ".3s" : ".5s"}`}
                >
                  <img src={project.cover} alt={project.title} />
                </div>
                <div className="project-info">
                  <div className="project-title">
                    <h5>{project.title}</h5>
                  </div>
                  <div className="project-meta">
                    <span>Location: {project.location}</span>
                    <span>Year: {project.year}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
