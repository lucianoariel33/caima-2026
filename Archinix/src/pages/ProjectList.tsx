import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectListItem from "@components/Project/ProjectList/ProjectListItem";

import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

export default function ProjectList() {
  return (
    <>
      <Breadcrumb
        title="Project - List"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project List" }]}
      />
      <ProjectListItem />
    </>
  );
}
