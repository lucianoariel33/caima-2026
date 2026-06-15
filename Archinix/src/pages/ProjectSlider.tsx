import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectSliderItem from "@components/Project/ProjectSliderItem/ProjectSliderItem";

import BreadcrumbBg from "/assets/img/breadcrumb/project-bg.jpg";

export default function ProjectSlider() {
  return (
    <>
      <Breadcrumb
        title="Project - List"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Project List" }]}
      />
      <ProjectSliderItem />
    </>
  );
}
