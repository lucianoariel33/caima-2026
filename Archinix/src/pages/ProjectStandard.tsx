import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectStandardItem from "@components/Project/ProjectStandardItem/ProjectStandardItem";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import { content } from "@/content/useContent";

export default function ProjectStandard() {
  const { breadcrumb } = content.projectsPage;

  return (
    <>
      <SectionMarker code="D1" name="Proyectos - Encabezado">
        <Breadcrumb title={breadcrumb.title} bgImg={breadcrumb.background} />
      </SectionMarker>
      <SectionMarker code="D2" name="Proyectos - Listado">
        <ProjectStandardItem />
      </SectionMarker>
    </>
  );
}
