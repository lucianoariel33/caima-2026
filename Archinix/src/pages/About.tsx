import AboutSection from "@components/About/AboutSection";
import ArchitectureAbout from "@components/About/ArchitectureAbout";
import TimelineSection from "@components/About/TimelineSection";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Counter from "@components/Counter/Counter";
import TeamsSection from "@components/TeamsSection/TeamsSection";
import VideoSection from "@components/VideoSection/VideoSection";
import BreadcrumbBg from "/assets/img/breadcrumb/about-bg.jpg";

export default function About() {
  return (
    <>
      <Breadcrumb
        title="About Us"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "About" }]}
      />
      <AboutSection />
      <TimelineSection />
      <ArchitectureAbout />
      <Counter />
      <VideoSection />
      <TeamsSection />
    </>
  );
}
