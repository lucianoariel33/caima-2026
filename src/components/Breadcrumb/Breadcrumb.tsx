import type { CSSProperties } from "react";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

interface PageHeaderProps {
  title?: string;
  bgImg?: string;
  eyebrow?: string;
  description?: string;
  highlights?: string[];
  className?: string;
  collapseMobileInfo?: boolean;
  /** @deprecated El trail Inicio / pagina fue removido del sitio. */
  breadcrumbs?: unknown;
}

export default function Breadcrumb({
  title,
  bgImg,
  eyebrow,
  description,
  highlights = [],
  className = "",
  collapseMobileInfo = false,
}: PageHeaderProps) {
  if (!bgImg) {
    return null;
  }

  const hasRichContent = Boolean(eyebrow || description || highlights.length);

  const sectionStyle: CSSProperties = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={`breadcrumb-bg project-bg ${className}`.trim()} style={sectionStyle}>
      <div className="overlay-3"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className={`breadcrumb-title ${hasRichContent ? "breadcrumb-title--rich" : "image-text-panel"}`}>
              {eyebrow && <p className="breadcrumb-title__eyebrow">{eyebrow}</p>}
              <h1 className="visible-slowly-right">{title}</h1>
              {collapseMobileInfo ? (
                <MobileInfoDisclosure summary="Ver resumen" mobileClassName="mobile-info-disclosure--breadcrumb">
                  {description && <p className="breadcrumb-title__lead">{description}</p>}
                  {highlights.length > 0 && (
                    <ul className="breadcrumb-title__highlights" aria-label="Resumen">
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </MobileInfoDisclosure>
              ) : (
                <>
                  {description && <p className="breadcrumb-title__lead">{description}</p>}
                  {highlights.length > 0 && (
                    <ul className="breadcrumb-title__highlights" aria-label="Resumen">
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
