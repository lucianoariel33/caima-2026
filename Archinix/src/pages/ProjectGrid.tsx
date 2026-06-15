import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectGridItem from "@components/Project/ProjectGrid/ProjectGridItem";

import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

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
