import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

export default function ProjectListItem() {
  return (
    <div className="project-list-wrap section-padding pt-0">
      <div className="container">
        {projects.map((project) => (
          <div className="row align-items-center mt-60" key={project.id}>
            <div className="col-xl-6 col-lg-6">
              <div className={`project-list-img wow img-custom-anim-${project.id % 2 === 0 ? "right" : "left"}`}>
                <img src={project.cover} alt={project.title} loading="lazy" />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="project-list-content wow fadeInUp" data-wow-delay=".3s">
                <div className="section-title">
                  <h6>{project.category}</h6>
                  <h2>{project.title}</h2>
                </div>

                <p>{project.summary}</p>

                <Link
                  to={`/project-details/${project.slug}`}
                  className="read_more_link"
                >
                  <span className="link_text">Read More</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
