import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectMetroItem from "@components/Project/ProjectMetro/ProjectMetroItem";

const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_proyectos_1920x480.jpg";

export default function ProjectMetro() {
  return (
    <>
      <Breadcrumb
        title="Project - Metro"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project Metro" }]}
      />
      <ProjectMetroItem />
    </>
  );
}
