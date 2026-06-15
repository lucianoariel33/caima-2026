import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectMetroItem from "@components/Project/ProjectMetro/ProjectMetroItem";

import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

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
