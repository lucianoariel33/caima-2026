import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollRestoration() {
  window.history.scrollRestoration = "manual";
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname]);
};

