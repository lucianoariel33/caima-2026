import { useParams } from "react-router-dom";
import ProjectDetailsWrapper from "@components/Project/ProjectDetailsWrapper/ProjectDetailsWrapper";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import { getProjectBySlug } from "@/content/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectBySlug(id);

  return (
    <>
      <SectionMarker code="F1" name="Detalle - Proyecto">
        <ProjectDetailsWrapper project={project} />
      </SectionMarker>
    </>
  );
}
