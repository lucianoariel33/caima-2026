import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ContactSection from "@components/Contact/ContactSection";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import { content } from "@/content/useContent";

export default function Contact() {
  const { breadcrumb } = content.contact;

  return (
    <>
      <SectionMarker code="E1" name="Contact - Encabezado">
        <Breadcrumb
          title={breadcrumb.title}
          bgImg={breadcrumb.background}
          eyebrow={breadcrumb.eyebrow}
          description={breadcrumb.description}
          highlights={breadcrumb.highlights}
        />
      </SectionMarker>
      <SectionMarker code="E2" name="Contact - Formulario e info">
        <ContactSection />
      </SectionMarker>
    </>
  );
}
