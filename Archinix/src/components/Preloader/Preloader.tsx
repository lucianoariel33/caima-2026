import React, { useEffect } from "react";
import { content } from "@/content/useContent";
import "./Preloader.scss";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const { logos, name } = content.site;

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="preloader" className="preloader-wrap" aria-hidden="true">
      <div className="preloader-inner">
        <div className="logo-container">
          <img src={logos.principal} alt={name} className="preloader-logo" />
        </div>
        <div className="preloader-spinner" aria-label="Cargando" />
      </div>
    </div>
  );
};

export default Preloader;
