import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ProjectSliderItem from "@components/Project/ProjectSliderItem/ProjectSliderItem";

const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_proyectos_1920x480.jpg";

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
