import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ContactSection from "@components/Contact/ContactSection";
import BreadcrumbBg from "/assets/img/breadcrumb/contact-bg.jpg";

export default function Contact() {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
