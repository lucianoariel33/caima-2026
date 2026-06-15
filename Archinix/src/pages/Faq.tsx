import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import FaqSection from "@components/Faq/FaqSection";

export default function Faq() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "FAQ's" }]}
      />

      <FaqSection />
    </>
  );
}
