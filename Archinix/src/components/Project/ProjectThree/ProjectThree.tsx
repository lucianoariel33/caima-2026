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
        id: 2,
        title: "Modern Bunglow",
        category: "interior",
        filter: ["construction", "residence"],
        image: "/assets/img/project/3-2.jpg",
    },
    {
        id: 3,
        title: "Office Building",
        category: "architecture",
        filter: ["residence", "building"],
        image: "/assets/img/project/3-3.jpg",
    },
    {
        id: 4,
        title: "Industrial Chic",
        category: "construction",
        filter: ["grid-of-images", "interior", "construction"],
        image: "/assets/img/project/3-4.jpg",
    },
    {
        id: 5,
        title: "Mediterrean Villa",
        category: "interior",
        filter: ["interior", "building"],
        image: "/assets/img/project/3-5.jpg",
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
        image: "/assets/img/project/3-7.jpg",
    },
];

const filters = [
    { label: "Show All", value: "*" },
    { label: "Building", value: "building" },
    { label: "Residence", value: "residence" },
    { label: "Interior", value: "interior" },
    { label: "Construction", value: "construction" },
];

export default function ProjectThree() {
    const [activeFilter, setActiveFilter] = useState("*");

    const filteredProjects =
        activeFilter === "*"
            ? masonryProjects
            : masonryProjects.filter((p) => p.filter.includes(activeFilter));

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
            </div>
        </div>
    );
}
