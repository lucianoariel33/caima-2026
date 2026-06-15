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
export default function HomeTwo() {
  return (
    <>
      <HeroTwoSlider />
      <MeetStudioAbout />
      <ServicesSlide />
      <FeatureSlider />
      <ProjectTwo />
      <ProcessSection />
      <VideoSection />
      <TeamsSection />
      <OurClients />
      <Cta />
      <Blog />
    </>
  );
}