import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectStandardItem from "@components/Project/ProjectStandardItem/ProjectStandardItem";
import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

export default function ProjectStandard() {
  return (
    <>
      <Breadcrumb
        title="Project - Standard"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project Standard" }]}
      />
      <ProjectStandardItem />
    </>
  );
}
