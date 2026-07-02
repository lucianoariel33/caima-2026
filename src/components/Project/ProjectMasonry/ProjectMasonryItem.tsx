import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

const filters = ["*"];

export default function ProjectMasonryItem() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="project-section section-padding pt-60">
      <div className="container">
        {/* Filter Menu */}
        <ul id="menu-filter" className="project-menu mb-0">
          {filters.map((filter) => (
            <li className="list-inline-item" key={filter}>
              <button
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "*"
                  ? "Show All"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Masonry Grid */}
        <div className="row project-filter mt-30">
          {filteredProjects.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-sm-6 project-item wow fadeInUp"
              data-wow-delay={`${0.2 * (index % 3 + 1)}s`}
            >
              <Link to={`/project-details/${item.slug}`} className="img-zoom">
                <div className="project-box">
                  <div className="project-img">
                    <img
                      src={item.cover}
                      className="img-fluid mx-auto d-block"
                      alt={item.title}
                    />
                  </div>
                  <div className="project-detail">
                    <h4 className="mb-0">{item.title}</h4>
                    <p className="mb-3">{item.category}</p>
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
