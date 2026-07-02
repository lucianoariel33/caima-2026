import type { CSSProperties } from "react";

interface PageHeaderProps {
  title?: string;
  bgImg?: string;
  /** @deprecated El trail Inicio / pagina fue removido del sitio. */
  breadcrumbs?: unknown;
}

export default function Breadcrumb({ title, bgImg }: PageHeaderProps) {
  if (!bgImg) {
    return null;
  }

  const sectionStyle: CSSProperties = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="breadcrumb-bg project-bg" style={sectionStyle}>
      <div className="overlay-3"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="breadcrumb-title image-text-panel">
              <h1 className="visible-slowly-right">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
