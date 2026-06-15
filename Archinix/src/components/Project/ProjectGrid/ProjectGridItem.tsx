interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Industrial Chic",
    category: "Construction",
    image: "/assets/img/project/project-standard/2-1.jpg",
  },
  {
    id: 2,
    title: "Restaurant Inn",
    category: "Functional Space",
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
    title: "Delta Villa",
    category: "Renovation",
    image: "/assets/img/project/project-standard/2-4.jpg",
  },
  {
    id: 5,
    title: "Lakefront Retreat",
    category: "Residence",
    image: "/assets/img/project/project-standard/2-5.jpg",
  },
  {
    id: 6,
    title: "Floor Design",
    category: "Interior",
    image: "/assets/img/project/project-standard/2-6.jpg",
  },
  {
    id: 7,
    title: "Wired Rod",
    category: "Production",
    image: "/assets/img/project/project-standard/2-7.jpg",
  },
  {
    id: 8,
    title: "Sears Tower",
    category: "Architecture",
    image: "/assets/img/project/project-standard/2-8.jpg",
  },
  {
    id: 9,
    title: "Willis Mall",
    category: "Architecture",
    image: "/assets/img/project/project-standard/2-9.jpg",
  },
  {
    id: 10,
    title: "Peninsula Heights",
    category: "Construction",
    image: "/assets/img/project/project-standard/2-10.jpg",
  },
  {
    id: 11,
    title: "Deffodil Park",
    category: "Architecture",
    image: "/assets/img/project/project-standard/2-11.jpg",
  },
  {
    id: 12,
    title: "Mediterranean Villa",
    category: "Renovation",
    image: "/assets/img/project/project-standard/2-12.jpg",
  },
];

export default function ProjectGridItem() {
  return (
    <div id="project-grid" className="project-grid project-section pt-60 pb-90">
      <div className="container-fluid">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index % 4 + 1)}s`} key={project.id}>
              <div className="single-project-item">
                <div className="project-bg">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-info">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
