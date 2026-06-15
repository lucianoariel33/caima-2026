import { useState } from "react";
import { Link } from "react-router-dom";

interface MasonryProject {
  id: number;
  title: string;
  category: string;
  filter: string[];
  image: string;
}

const masonryProjects: MasonryProject[] = [
  {
    id: 1,
    title: "Lakefront Retreat",
    category: "architecture",
    filter: ["building", "interior"],
    image: "/assets/img/project/3-1.jpg",
  },
  {
    id: 5,
    title: "Mediterranean Villa",
    category: "interior",
    filter: ["interior", "building"],
    image: "/assets/img/project/3-5.jpg",
  },

  {
    id: 3,
    title: "Office Building",
    category: "architecture",
    filter: ["residence", "building"],
    image: "/assets/img/project/3-8.jpg",
  },
  {
    id: 4,
    title: "Industrial Chic",
    category: "construction",
    filter: ["interior", "construction"],
    image: "/assets/img/project/3-4.jpg",
  },

  {
    id: 6,
    title: "Ranch House",
    category: "construction",
    filter: ["construction"],
    image: "/assets/img/project/3-6.jpg",
  },
  {
    id: 7,
    title: "Urban Townhome",
    category: "architecture",
    filter: ["residence", "interior"],
    image: "/assets/img/project/3-3.jpg",
  },
];

const filters = ["*", "building", "residence", "interior", "construction"];

export default function ProjectMasonryItem() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProjects =
    activeFilter === "*"
      ? masonryProjects
      : masonryProjects.filter((p) => p.filter.includes(activeFilter));

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
              <Link to={`/project-details/${item.id}`} className="img-zoom">
                <div className="project-box">
                  <div className="project-img">
                    <img
                      src={item.image}
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
