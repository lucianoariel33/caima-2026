import { default as TestimonialSection } from "@components/Testimonial/Testimonial";
import CtaContact from "@components/CTA/CtaContact";
import OurClients from "@components/OurClients/OurClients";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";

const bgUrl = "/ESTRUCTURA/cta_principal_1900x760.jpg";
const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_testimonios_1920x480.jpg";

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
