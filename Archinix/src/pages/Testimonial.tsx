import { default as TestimonialSection } from "@components/Testimonial/Testimonial";
import CtaContact from "@components/CTA/CtaContact";
import OurClients from "@components/OurClients/OurClients";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";

import bgUrl from "/assets/img/cta-bg.jpg";
import BreadcrumbBg from "/assets/img/breadcrumb/testimonial-bg.jpg";

export default function Testimonial() {
  return (
    <>
      <Breadcrumb
        title="Testimonials"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Testimonial" }]}
      />
      <TestimonialSection />
      <CtaContact title="Let's start your new dream project" imgUrl={bgUrl} />
      <OurClients />
    </>
  );
}
