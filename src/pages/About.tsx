import AboutSection from "@components/About/AboutSection";
import ArchitectureAbout from "@components/About/ArchitectureAbout";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Counter from "@components/Counter/Counter";
import VideoSection from "@components/VideoSection/VideoSection";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import { content } from "@/content/useContent";

// OCULTOS temporalmente - se eliminan al terminar el proyecto
// import TimelineSection from "@components/About/TimelineSection";
// import TeamsSection from "@components/TeamsSection/TeamsSection";

export default function About() {
  const { breadcrumb } = content.about;

  return (
    <>
      <SectionMarker code="B1" name="About - Encabezado">
        <Breadcrumb
          title={breadcrumb.title}
          bgImg={breadcrumb.background}
          eyebrow={breadcrumb.eyebrow}
          description={breadcrumb.description}
          highlights={breadcrumb.highlights}
        />
      </SectionMarker>
      <SectionMarker code="B2" name="About - Nuestro estudio">
        <AboutSection />
      </SectionMarker>
      {/* OCULTOS temporalmente
      <SectionMarker code="B3" name="About - Timeline">
        <TimelineSection />
      </SectionMarker>
      */}
      <SectionMarker code="B4" name="About - Enfoque">
        <ArchitectureAbout />
      </SectionMarker>
      <SectionMarker code="B5" name="About - Contadores">
        <Counter />
      </SectionMarker>
      <SectionMarker code="B6" name="About - Video">
        <VideoSection />
      </SectionMarker>
      {/* OCULTOS temporalmente
      <SectionMarker code="B7" name="About - Equipo">
        <TeamsSection />
      </SectionMarker>
      */}
    </>
  );
}
