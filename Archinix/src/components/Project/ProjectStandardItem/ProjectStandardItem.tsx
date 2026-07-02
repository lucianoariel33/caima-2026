import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import ProjectCategoryFilter from "@/components/Project/ProjectCategoryFilter";
import ProjectsGrid from "@/components/Project/ProjectsGrid";
import { content } from "@/content/useContent";

export default function ProjectStandardItem() {
  const [activeFilter, setActiveFilter] = useState("*");
  const { subtitle, description } = content.home.projects;

  const filteredProjects = useMemo(
    () =>
      activeFilter === "*"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <div id="project-standard" className="cad-projects-section cad-projects-section--page pt-60 pb-90">
      <div className="container">
        <div className="cad-projects-section__intro">
          <p className="cad-projects-section__eyebrow">{subtitle}</p>
          {description && <p className="cad-projects-section__lead">{description}</p>}
          <ProjectCategoryFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
