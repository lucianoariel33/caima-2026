import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { projects } from "@/content/projects";
import ProjectCategoryFilter from "@/components/Project/ProjectCategoryFilter";
import ProjectsGrid from "@/components/Project/ProjectsGrid";
import { content } from "@/content/useContent";

export default function ProjectStandardItem() {
  const [activeFilter, setActiveFilter] = useState("*");
  const { intro, featuredLabel, featuredNote, catalogEyebrow, catalogLead } =
    content.projectsPage;

  const orderedProjects = useMemo(
    () => [...projects].sort((projectA, projectB) => projectB.id - projectA.id),
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "*"
        ? orderedProjects
        : orderedProjects.filter((project) => project.category === activeFilter),
    [activeFilter, orderedProjects]
  );

  const [mainProject, ...secondaryProjects] = orderedProjects.slice(0, 3);
  const activeTitle = activeFilter === "*" ? "Todos los proyectos" : activeFilter;

  return (
    <div id="project-standard" className="cad-projects-section cad-projects-section--page">
      <div className="container">
        <section className="cad-portfolio-intro">
          <div className="cad-portfolio-intro__copy">
            <p className="cad-projects-section__eyebrow">{intro.eyebrow}</p>
            <h2>{intro.title}</h2>
          </div>

          <div className="cad-portfolio-intro__detail">
            <p>{intro.description}</p>
            <ul>
              {intro.principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cad-portfolio-featured" aria-label="Obras destacadas">
          {mainProject && (
            <Link
              to={`/project-details/${mainProject.slug}`}
              className="cad-portfolio-featured__main"
            >
              <img src={mainProject.cover} alt={mainProject.title} />
              <div className="cad-portfolio-featured__overlay">
                <span>{featuredLabel}</span>
                <h3>{mainProject.title}</h3>
                {mainProject.summary && <p>{mainProject.summary}</p>}
                <small>
                  {mainProject.category}
                  {mainProject.location ? ` / ${mainProject.location}` : ""}
                </small>
              </div>
            </Link>
          )}

          <div className="cad-portfolio-featured__side">
            <div className="cad-portfolio-note">
              <span>Lectura de portfolio</span>
              <p>{featuredNote}</p>
            </div>

            {secondaryProjects.map((project) => (
              <Link
                to={`/project-details/${project.slug}`}
                className="cad-portfolio-small-card"
                key={project.slug}
              >
                <img src={project.cover} alt={project.title} />
                <div>
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                  {project.location && <p>{project.location}</p>}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="cad-project-catalog">
          <div className="cad-project-catalog__header">
            <div>
              <p className="cad-projects-section__eyebrow">{catalogEyebrow}</p>
              <h3>{activeTitle}</h3>
            </div>
            {activeFilter === "*" && <p>{catalogLead}</p>}
          </div>

          <ProjectCategoryFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="cad-projects-section__grid">
            <ProjectsGrid projects={filteredProjects} featuredLayout={activeFilter === "*"} />
          </div>
        </section>
      </div>
    </div>
  );
}
