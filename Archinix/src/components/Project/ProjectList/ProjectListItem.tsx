import { Link } from "react-router-dom";

interface ProjectListItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const projectList: ProjectListItem[] = [
  {
    id: 1,
    category: "Architecture",
    title: "Daffodil Park",
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "/assets/img/project/project-list/6-1.jpg",
  },
  {
    id: 2,
    category: "Construction",
    title: "Peninsula Heights",
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "/assets/img/project/project-list/6-2.jpg",
  },
  {
    id: 3,
    category: "Residence",
    title: "Mediterrean Villa",
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "/assets/img/project/project-list/6-3.jpg",
  },
  {
    id: 4,
    category: "Manufacture",
    title: "Rolling Station",
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "/assets/img/project/project-list/6-4.jpg",
  },
];

export default function ProjectListItem() {
  return (
    <div className="project-list-wrap section-padding pt-0">
      <div className="container">
        {projectList.map((project) => (
          <div className="row align-items-center mt-60" key={project.id}>
            <div className="col-xl-6 col-lg-6">
              <div className={`project-list-img wow img-custom-anim-${project.id % 2 === 0 ? "right" : "left"}`}>
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="project-list-content wow fadeInUp" data-wow-delay=".3s">
                <div className="section-title">
                  <h6>{project.category}</h6>
                  <h2>{project.title}</h2>
                </div>

                <p>{project.description}</p>

                <Link
                  to={`/project-details/${project.id}`}
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
