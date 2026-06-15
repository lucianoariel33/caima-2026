import { Link } from "react-router-dom";

interface MetroProject {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "big" | "small" | "wide";
  link?: string;
}
const metroProjects: MetroProject[] = [
  {
    id: 1,
    title: "Apartments",
    category: "Architecture",
    image: "/assets/img/project/project-metro/1.jpg",
    size: "big",
  },
  {
    id: 2,
    title: "Facade",
    category: "Landscape",
    image: "/assets/img/project/project-metro/2.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Skycrapers",
    category: "Construction",
    image: "/assets/img/project/project-metro/3.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Museum",
    category: "Interior",
    image: "/assets/img/project/project-metro/4.jpg",
    size: "wide",
  },
  {
    id: 5,
    title: "Furniture",
    category: "Exterior",
    image: "/assets/img/project/project-metro/5.jpg",
    size: "wide",
  },
];

export default function ProjectMetroItem() {
  const bigItem = metroProjects.find((p) => p.size === "big");
  const others = metroProjects.filter((p) => p.size !== "big");

  return (
    <div id="project-metro" className="project-section pt-60">
      <div className="row gx-0">
        {bigItem && (
          <div className="col-xl-6 col-lg-6 col-md-6 wow img-custom-anim-left">
            <Link
              to={`/project-details/${bigItem.id}`}
              className="single-project-wrap big"
            >
              <img src={bigItem.image} alt={bigItem.title} loading="lazy" />
              <div className="details">
                <div className="info">
                  <h5>{bigItem.title}</h5>
                  <h6>{bigItem.category}</h6>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="row gx-0">
            {others.map((project) => (
              <div
                className={`col-lg-6 ${project.size === "wide" ? "d-none d-lg-block" : ""
                  }`}
                key={project.id}
              >
                <Link
                  to={`/project-details/${project.id}`}
                  className={`single-project-wrap ${project.size}`}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="details">
                    <div className="info">
                      <h5>{project.title}</h5>
                      <h6>{project.category}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
