import HeroTwoSlider from "@/components/Hero/HeroTwo";
import MeetStudioAbout from "@/components/About/MeetStudioAbout";
import FeatureThree from "@components/Feature/FeatureThree";
import Counter from "@components/Counter/Counter";
import FeatureLine from "@components/Feature/FeatureLine";
import Cta from "@components/CTA/Cta";
import FeatureSlider from "@/components/Feature/FeatureSlider";
import ProjectsHome from "@/components/Project/ProjectsHome";
import SectionMarker from "@components/SectionMarker/SectionMarker";

export default function HomeMain() {
  return (
    <div className="home-main">
      <SectionMarker code="A1" name="Home - Slider principal">
        <HeroTwoSlider />
      </SectionMarker>
      <SectionMarker code="A2" name="Home - El estudio" instant>
        <MeetStudioAbout />
      </SectionMarker>
      <SectionMarker code="A3" name="Home - Feature Line" instant>
        <FeatureLine />
      </SectionMarker>
      <SectionMarker code="A4" name="Home - Servicios" instant>
        <FeatureThree />
      </SectionMarker>
      <SectionMarker code="A5" name="Home - Proyectos" instant>
        <ProjectsHome />
      </SectionMarker>
      <SectionMarker code="A6" name="Home - Contadores" instant>
        <Counter />
      </SectionMarker>
      <SectionMarker code="A7" name="Home - Feature slider" instant>
        <FeatureSlider />
      </SectionMarker>
      <SectionMarker code="A8" name="Home - CTA" instant>
        <Cta />
      </SectionMarker>
    </div>
  );
}
