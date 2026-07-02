import MeetStudioAbout from "@/components/About/MeetStudioAbout";
import Cta from "@/components/CTA/Cta";
import HeroTwoSlider from "@/components/Hero/HeroTwo";
import Blog from "@/components/HomeBlog/Blog";
import OurClients from "@/components/OurClients/OurClients";
import ProcessSection from "@/components/Process/ProcessSection";
import ServicesSlide from "@/components/Services/ServicesSlide";
import TeamsSection from "@/components/TeamsSection/TeamsSection";
import VideoSection from "@/components/VideoSection/VideoSection";
import FeatureSlider from "@/components/Feature/FeatureSlider";
import ProjectTwo from "@/components/Project/ProjectTwo";
import SectionMarker from "@/components/SectionMarker/SectionMarker";
export default function HomeTwo() {
  return (
    <>
      <SectionMarker code="11" name="Home 2 - Slider principal">
        <HeroTwoSlider />
      </SectionMarker>
      <SectionMarker code="12" name="Home 2 - Meet Studio">
        <MeetStudioAbout />
      </SectionMarker>
      <SectionMarker code="13" name="Home 2 - Servicios slider">
        <ServicesSlide />
      </SectionMarker>
      <SectionMarker code="14" name="Home 2 - Feature slider">
        <FeatureSlider />
      </SectionMarker>
      <SectionMarker code="15" name="Home 2 - Proyectos">
        <ProjectTwo />
      </SectionMarker>
      <SectionMarker code="16" name="Home 2 - Proceso">
        <ProcessSection />
      </SectionMarker>
      <SectionMarker code="17" name="Home 2 - Video">
        <VideoSection />
      </SectionMarker>
      <SectionMarker code="18" name="Home 2 - Equipo">
        <TeamsSection />
      </SectionMarker>
      <SectionMarker code="19" name="Home 2 - Clientes">
        <OurClients />
      </SectionMarker>
      <SectionMarker code="20" name="Home 2 - CTA">
        <Cta />
      </SectionMarker>
      <SectionMarker code="21" name="Home 2 - Blog">
        <Blog />
      </SectionMarker>
    </>
  );
}
