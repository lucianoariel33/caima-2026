import ProcessAccordion from "@components/Accordions/ProcessAccordion";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import FeatureLine from "@components/Feature/FeatureLine";
import ProcessHero from "@components/Process/ProcessHero";
import OurProcess from "@components/Project/OurProcess/OurProcess";
const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_process.jpg";

export default function Process() {
  return (
    <>
      <Breadcrumb
        title="Our Process"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Process" }]}
      />
      <ProcessHero />
      <OurProcess styleTwo={true} />
      <FeatureLine />
      <ProcessAccordion />
    </>
  );
}
