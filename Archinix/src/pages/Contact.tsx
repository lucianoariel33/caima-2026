import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import ContactSection from "@components/Contact/ContactSection";
const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_contact.jpg";

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
