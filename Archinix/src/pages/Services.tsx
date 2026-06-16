import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import AwardSection from "@components/Feature/AwardSection";
import CoreFeature from "@components/Feature/CoreFeature";
import FeatureLine from "@components/Feature/FeatureLine";
import OurProcess from "@components/Project/OurProcess/OurProcess";
import ServiceItem from "@components/Services/ServiceItem";
import Testimonial from "@components/Testimonial/Testimonial";

const bgUrl = "/ESTRUCTURA/breadcrumb_servicios.jpg";

export default function Services() {
  return (
    <>
      <Breadcrumb
        title="Our Services"
        bgImg={bgUrl}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Services" }]}
      />
      <ServiceItem />
      <FeatureLine />
      <CoreFeature />
      <AwardSection />
      <OurProcess styleTwo={true} />
      <Testimonial />
    </>
  );
}
