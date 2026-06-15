import ProcessAccordion from "@components/Accordions/ProcessAccordion";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import CtaContact from "@components/CTA/CtaContact";
import TeamsSection from "@components/TeamsSection/TeamsSection";
import bgUrl from "/assets/img/breadcrumb/team-bg.jpeg";

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
