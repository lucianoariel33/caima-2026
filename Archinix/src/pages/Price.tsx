import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import CtaContact from "@components/CTA/CtaContact";
import PricingSection from "@components/Pricing/PricingSection";
import ProcessSection from "@components/Process/ProcessSection";
const imgUrl = "/ESTRUCTURA/cta_pricing.jpg";
const bgUrl = "/ESTRUCTURA/breadcrumb_pricing.jpg";

export default function Pricing() {
  return (
    <>
      <Breadcrumb
        title="Pricing Plan"
        bgImg={bgUrl}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Price" }]}
      />
      <PricingSection />
      <div className="pb-90">
        <CtaContact title="Best builds start early" imgUrl={imgUrl} />
      </div>
      <ProcessSection />
    </>
  );
}
