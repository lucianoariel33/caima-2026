import { Link } from "react-router-dom";
import type { ProjectContent } from "@/content/projects";

interface ProjectCardProps {
  project: ProjectContent;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      to={`/project-details/${project.slug}`}
      className={`cad-project-card${featured ? " cad-project-card--featured" : ""}`}
    >
      <div className="cad-project-card__media">
        <img src={project.cover} alt={project.title} loading="lazy" />
        <span className="cad-project-card__badge">{project.category}</span>
        <div className="cad-project-card__footer">
          <h4 className="cad-project-card__title">{project.title}</h4>
          <span className="cad-project-card__link">
            Ver proyecto <i className="las la-arrow-right"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
