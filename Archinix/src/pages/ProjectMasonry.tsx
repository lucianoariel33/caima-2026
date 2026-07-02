import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectMasonryItem from "@components/Project/ProjectMasonry/ProjectMasonryItem";

const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_proyectos_1920x480.jpg";

export default function ProjectMasonry() {
  return (
    <>
      <Breadcrumb
        title="Project - Masonry"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project Masonry" }]}
      />
      <ProjectMasonryItem />
    </>
  );
}
