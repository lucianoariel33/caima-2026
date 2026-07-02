import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

const filters = [
    { label: "Show All", value: "*" },
];

export default function ProjectThree() {
    const [activeFilter, setActiveFilter] = useState("*");

    const filteredProjects =
        activeFilter === "*"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <div className="project-section gray-bg section-padding mt-0 mt-md-60 pb-90">
            <div className="container">
                <div className="row border-bottom">
                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="section-title">
                            <h6>Our Portfolio</h6>
                            <h2>Work Example</h2>
                        </div>
                    </div>
                </div>

                <div id="project-masonry" data-scroll-index="2">
                    <div className="container">
                        <div className="row text-lg-end mt-30">
                            <ul id="menu-filter" className="project-menu mb-0">
                                {filters.map((filter) => (
                                    <li className="list-inline-item" key={filter.value}>
                                        <button
                                            className={activeFilter === filter.value ? "active" : ""}
                                            onClick={() => setActiveFilter(filter.value)}
                                        >
                                            {filter.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="row project-filter mt-30">
                            {filteredProjects.map((item) => (
                                <div
                                    key={item.id}
                                    className="col-lg-4 col-md-6 col-sm-6 project-item"
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
            </div>
        </div>
    );
}
