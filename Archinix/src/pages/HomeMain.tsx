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
    <>
      <SectionMarker code="A1" name="Home - Slider principal">
        <HeroTwoSlider />
      </SectionMarker>
      <SectionMarker code="A2" name="Home - El estudio">
        <MeetStudioAbout />
      </SectionMarker>
      <SectionMarker code="A3" name="Home - Feature Line">
        <FeatureLine />
      </SectionMarker>
      <SectionMarker code="A4" name="Home - Servicios">
        <FeatureThree />
      </SectionMarker>
      <SectionMarker code="A5" name="Home - CTA">
        <Cta />
      </SectionMarker>
      <SectionMarker code="A6" name="Home - Feature slider">
        <FeatureSlider />
      </SectionMarker>
      <SectionMarker code="A7" name="Home - Proyectos">
        <ProjectsHome />
      </SectionMarker>
      <SectionMarker code="A8" name="Home - Contadores">
        <Counter />
      </SectionMarker>
    </>
  );
}
