import { useParams } from "react-router-dom";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectDetailsWrapper from "@components/Project/ProjectDetailsWrapper/ProjectDetailsWrapper";
import { getProjectBySlug } from "@/content/projects";

const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_proyectos.jpg";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectBySlug(id);

  return (
    <>
      <Breadcrumb
        title={project.title}
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: project.title }]}
      />

      <ProjectDetailsWrapper project={project} />
    </>
  );
}
