import { useParams } from "react-router-dom";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectDetailsWrapper from "@components/Project/ProjectDetailsWrapper/ProjectDetailsWrapper";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import { getProjectBySlug } from "@/content/projects";
import { content } from "@/content/useContent";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectBySlug(id);
  const breadcrumbBg = content.projectsPage.breadcrumb.background;

  return (
    <>
      <SectionMarker code="F1" name="Detalle - Encabezado">
        <Breadcrumb title={project.title} bgImg={breadcrumbBg} />
      </SectionMarker>

      <SectionMarker code="F2" name="Detalle - Contenido">
        <ProjectDetailsWrapper project={project} />
      </SectionMarker>
    </>
  );
}
