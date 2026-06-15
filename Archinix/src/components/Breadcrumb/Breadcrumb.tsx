import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  to?: string;
}

interface PageHeaderProps {
  title?: string;
  bgImg?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function Breadcrumb({
  title,
  bgImg,
  breadcrumbs,
}: PageHeaderProps) {
  const sectionStyle: CSSProperties = {
    backgroundImage: bgImg ? `url(${bgImg})` : undefined,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      {bgImg && (
        <div className="breadcrumb-bg project-bg" style={sectionStyle}>
          <div className="overlay-3"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="breadcrumb-title">
                  <h1 className="visible-slowly-right">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="breadcrumb-meta-wrap pt-20 pb-20 border-bottom">
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? "active" : ""
                      }`}
                    aria-current={
                      index === breadcrumbs.length - 1 ? "page" : undefined
                    }
                  >
                    {item.to ? (
                      <Link to={item.to}>{item.name}</Link>
                    ) : (
                      item.name
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
