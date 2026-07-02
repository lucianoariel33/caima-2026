import type { ProjectContent } from "@/content/projects";
import ProjectCard from "@/components/Project/ProjectCard";

interface ProjectsGridProps {
  projects: ProjectContent[];
  featuredLayout?: boolean;
}

export default function ProjectsGrid({
  projects,
  featuredLayout = false,
}: ProjectsGridProps) {
  if (featuredLayout && projects.length > 0) {
    const [first, second, ...rest] = projects;

    return (
      <div className="cad-projects-grid cad-projects-grid--featured">
        <div className="row g-4">
          {[first, second].filter(Boolean).map((project, index) => (
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay={`${0.15 * (index + 1)}s`}
              key={project.slug}
            >
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="row g-4 mt-1">
            {rest.map((project, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 * (index % 4 + 1)}s`}
                key={project.slug}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="cad-projects-grid">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay={`${0.1 * (index % 4 + 1)}s`}
            key={project.slug}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
