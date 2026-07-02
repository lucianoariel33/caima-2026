import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import ScrollUpButton from "@components/ScrollUpButton/ScrollUpButton";
import SectionMarker from "@components/SectionMarker/SectionMarker";
import PageTransition from "@components/PageTransition/PageTransition";

const Layout: React.FC = () => {
  useScrollRestoration();

  return (
    <>
      <SectionMarker code="G1" name="Layout - Header">
        <Header />
      </SectionMarker>
      <PageTransition />
      <SectionMarker code="G2" name="Layout - Footer">
        <Footer />
      </SectionMarker>
      <ScrollUpButton />
    </>
  );
};

export default Layout;
