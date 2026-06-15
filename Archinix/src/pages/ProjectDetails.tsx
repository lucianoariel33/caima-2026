import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectDetailsWrapper from "@components/Project/ProjectDetailsWrapper/ProjectDetailsWrapper";

import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

export default function ProjectDetails() {
  return (
    <>
      <Breadcrumb
        title="Lakefront Retreat"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project Details" }]}
      />

      <ProjectDetailsWrapper />
    </>
  );
}
