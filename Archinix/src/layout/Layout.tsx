import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import ScrollUpButton from "@components/ScrollUpButton/ScrollUpButton";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const Layout: React.FC = () => {
  useScrollRestoration();

  return (
    <>
      <ThemeToggle />
      <Header />
      <Outlet />
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default Layout;
