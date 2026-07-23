import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import CoreFeature from "@components/Feature/CoreFeature";
import FeatureLine from "@components/Feature/FeatureLine";
import ServiceItem from "@components/Services/ServiceItem";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import { content } from "@/content/useContent";

// OCULTOS temporalmente - se eliminan al terminar el proyecto
// import AwardSection from "@components/Feature/AwardSection";
// import OurProcess from "@components/Project/OurProcess/OurProcess";

export default function Services() {
  const { breadcrumb } = content.services;

  return (
    <>
      <SectionMarker code="C1" name="Services - Encabezado">
        <Breadcrumb
          title={breadcrumb.title}
          bgImg={breadcrumb.background}
          eyebrow={breadcrumb.eyebrow}
          description={breadcrumb.description}
          highlights={breadcrumb.highlights}
          collapseMobileInfo
        />
      </SectionMarker>
      <SectionMarker code="C2" name="Services - Listado">
        <ServiceItem />
      </SectionMarker>
      <SectionMarker code="C3" name="Services - Feature Line">
        <FeatureLine />
      </SectionMarker>
      <SectionMarker code="C4" name="Services - Especialidades">
        <CoreFeature />
      </SectionMarker>
      {/* OCULTOS temporalmente
      <SectionMarker code="C5" name="Services - Premios">
        <AwardSection />
      </SectionMarker>
      <SectionMarker code="C6" name="Services - Proceso">
        <OurProcess styleTwo={true} />
      </SectionMarker>
      */}
    </>
  );
}
