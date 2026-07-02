import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectListItem from "@components/Project/ProjectList/ProjectListItem";

const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_proyectos_1920x480.jpg";

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
