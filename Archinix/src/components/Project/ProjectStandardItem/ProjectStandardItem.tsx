import { Link } from "react-router-dom";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projectData: ProjectItem[] = [
  {
    id: 1,
    title: "Industrial Chic",
    category: "Architecture",
    image: "/assets/img/project/project-standard/2-1.jpg",
  },
  {
    id: 2,
    title: "Restaurant Inn",
    category: "Interior",
    image: "/assets/img/project/project-standard/2-2.jpg",
  },
  {
    id: 3,
    title: "Parkview Resort",
    category: "Interior",
    image: "/assets/img/project/project-standard/2-3.jpg",
  },
  {
    id: 4,
    title: "Peninsula Villa",
    category: "Residence",
    image: "/assets/img/project/project-standard/2-4.jpg",
  },
  {
    id: 5,
    title: "Lakefront Retreat",
    category: "Architecture",
    image: "/assets/img/project/project-standard/2-5.jpg",
  },
  {
    id: 6,
    title: "Floor Design",
    category: "Interior",
    image: "/assets/img/project/project-standard/2-6.jpg",
  },
];

export default function ProjectStandardItem() {
  return (
    <div id="project-standard" className="project-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          {projectData.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index % 3 + 1)}s`} key={item.id}>
              <Link
                to={`/project-details/${item.id}`}
                className="single-project-wrapper"
              >
                <div className="project-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
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
