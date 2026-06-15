import { Link } from "react-router-dom";
import SectionHeading from "@components/SectionHeading/SectionHeading";

interface ProjectItem {
  id: number;
  title: string;
  imgSrc: string;
  projectMeta?: {
    location: string;
    year: number;
  };
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "The Beachfront Retreat",
    imgSrc: "assets/img/project/1-1.jpg",
    projectMeta: { location: "Miami, FL", year: 2025 },
  },
  {
    id: 2,
    title: "The Contemporary Condo",
    imgSrc: "assets/img/project/1-2.jpg",
    projectMeta: { location: "Toronto, ON", year: 2025 },
  },
  {
    id: 3,
    title: "The Hilltop Mansion",
    imgSrc: "assets/img/project/1-3.jpg",
    projectMeta: { location: "San Francisco, CA", year: 2025 },
  },
  {
    id: 4,
    title: "The Modernist House",
    imgSrc: "assets/img/project/1-4.jpg",
    projectMeta: { location: "Los Angeles, CA", year: 2025 },
  },
];

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
          {projects.map((project, index) => (
            <div className="col-xl-6 col-lg-6 col-md-6" key={project.id}>
              <Link
                to={`/project-details/${project.id}`}
                className="single-project-item"
              >
                <div
                  className={`project-img wow img-custom-anim-${index % 2 === 0 ? "left" : "right"
                    }`}
                  data-wow-delay={`${index % 2 === 0 ? ".3s" : ".5s"}`}
                >
                  <img src={project.imgSrc} alt="" />
                </div>
                <div className="project-info">
                  <div className="project-title">
                    <h5>{project.title}</h5>
                  </div>
                  <div className="project-meta">
                    <span>Location: {project.projectMeta?.location}</span>
                    <span>Year: {project.projectMeta?.year}</span>
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
