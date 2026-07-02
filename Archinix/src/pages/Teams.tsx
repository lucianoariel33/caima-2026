import ProcessAccordion from "@components/Accordions/ProcessAccordion";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import CtaContact from "@components/CTA/CtaContact";
import TeamsSection from "@components/TeamsSection/TeamsSection";
const bgUrl = "/ESTRUCTURA/breadcrumb_equipo_1920x480.jpg";

export default function Teams() {
  return (
    <>
      <Breadcrumb
        title="Our Team"
        bgImg={bgUrl}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Team" }]}
      />
      <TeamsSection />
      <CtaContact />
      <ProcessAccordion />
    </>
  );
}
