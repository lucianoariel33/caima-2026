import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectMasonryItem from "@components/Project/ProjectMasonry/ProjectMasonryItem";

import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

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
