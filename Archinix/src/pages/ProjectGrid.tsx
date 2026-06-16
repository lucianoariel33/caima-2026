import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectGridItem from "@components/Project/ProjectGrid/ProjectGridItem";

const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_proyectos.jpg";

export default function ProjectGrid() {
  return (
    <>
      <Breadcrumb
        title="Project - Grid"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project Grid" }]}
      />
      <ProjectGridItem />
    </>
  );
}
