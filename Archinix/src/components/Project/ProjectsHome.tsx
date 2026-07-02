import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/content/projects";
import ProjectCategoryFilter from "@/components/Project/ProjectCategoryFilter";
import ProjectsGrid from "@/components/Project/ProjectsGrid";
import { content } from "@/content/useContent";

const HOME_PROJECTS_LIMIT = 12;

export default function ProjectsHome() {
  const [activeFilter, setActiveFilter] = useState("*");
  const { title } = content.home.projects;
  const { verMasButton } = content.ui;

  const filteredProjects = useMemo(() => {
    const list =
      activeFilter === "*"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return [...list]
      .sort((a, b) => b.id - a.id)
      .slice(0, HOME_PROJECTS_LIMIT);
  }, [activeFilter]);

  return (
    <div id="proyectos" className="cad-projects-section cad-projects-section--home section-padding">
      <div className="container">
        <div className="cad-projects-section__header cad-projects-section__header--centered">
          <div className="section-title mb-0">
            <h2>{title}</h2>
          </div>
          <ProjectCategoryFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="cad-projects-section__grid">
          <ProjectsGrid projects={filteredProjects} />
        </div>

        <div className="cad-projects-section__cta">
          <Link to="/project-standard" className="theme-btn cad-projects-section__btn">
            {verMasButton}
            <i className="las la-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
