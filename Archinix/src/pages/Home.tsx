import HeroOne from "@components/Hero/HeroOne";
import StudioAbout from "@components/About/StudioAbout";
import OurServices from "@components/Services/OurServices";
import FeatureLine from "@components/Feature/FeatureLine";
import RecentProject from "@components/Project/RecentProject/RecentProject";
import OurProcess from "@components/Project/OurProcess/OurProcess";
import Testimonial from "@components/Testimonial/Testimonial";
import Cta from "@components/CTA/Cta";
import Counter from "@components/Counter/Counter";
import Blog from "@components/HomeBlog/Blog";
import SectionMarker from "@components/SectionMarker/SectionMarker";

export default function Home() {
  return (
    <>
      <SectionMarker code="01" name="Home 1 - Hero principal">
        <HeroOne />
      </SectionMarker>
      <SectionMarker code="02" name="Home 1 - Studio About">
        <StudioAbout />
      </SectionMarker>
      <SectionMarker code="03" name="Home 1 - Servicios">
        <OurServices />
      </SectionMarker>
      <SectionMarker code="04" name="Home 1 - Feature Line">
        <FeatureLine />
      </SectionMarker>
      <SectionMarker code="05" name="Home 1 - Proyectos recientes">
        <RecentProject />
      </SectionMarker>
      <SectionMarker code="06" name="Home 1 - Proceso">
        <OurProcess />
      </SectionMarker>
      <SectionMarker code="07" name="Home 1 - Testimonios">
        <Testimonial />
      </SectionMarker>
      <SectionMarker code="08" name="Home 1 - CTA">
        <Cta />
      </SectionMarker>
      <SectionMarker code="09" name="Home 1 - Contadores">
        <Counter />
      </SectionMarker>
      <SectionMarker code="10" name="Home 1 - Blog">
        <Blog />
      </SectionMarker>
    </>
  );
}
