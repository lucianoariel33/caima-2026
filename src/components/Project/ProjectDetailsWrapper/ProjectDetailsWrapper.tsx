import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Gallery from "./Gallery";
import InfoSidebar from "./InfoSidebar";
import TextBlock from "./TextBlock";
import { getMoreProjects, type ProjectContent } from "@/content/projects";

interface ParagraphSection {
  title?: string;
  paragraphs: string[];
}

interface InfoItem {
  label: string;
  value: string;
}

export default function ProjectDetailsWrapper({
  project,
}: {
  project: ProjectContent;
}) {
  const heroRef = useRef<HTMLElement | null>(null);
  const moreProjectsRef = useRef<HTMLElement | null>(null);
  const [showStickyHeading, setShowStickyHeading] = useState(false);
  const [showMoreProjectsHeading, setShowMoreProjectsHeading] = useState(false);
  const [dockMoreProjectsHeading, setDockMoreProjectsHeading] = useState(false);
  const moreProjects = getMoreProjects(project.slug, 6);
  const overviewParagraphs = project.description.length
    ? project.description
    : [project.summary].filter(Boolean);
  const detailImage =
    project.gallery.find((image) => image !== project.featuredImage) ||
    project.gallery[0] ||
    project.featuredImage;
  const info: InfoItem[] = [
    { label: "Año", value: project.year },
    { label: "Ubicación", value: project.location },
    { label: "Superficie", value: project.surface },
    { label: "Estado", value: project.status },
  ];
  const concept: ParagraphSection = {
    title: "Concepto",
    paragraphs: project.concept,
  };
  const conclusion: ParagraphSection = {
    title: "Resultado",
    paragraphs: project.result,
  };

  useEffect(() => {
    let frame = 0;

    const updateStickyHeadings = () => {
      const headerOffset = window.innerWidth < 768 ? 68 : 74;

      if (!heroRef.current) {
        return;
      }

      setShowStickyHeading(heroRef.current.getBoundingClientRect().bottom <= headerOffset);

      if (!moreProjectsRef.current) {
        setDockMoreProjectsHeading(false);
        setShowMoreProjectsHeading(false);
        return;
      }

      const moreProjectsRect = moreProjectsRef.current.getBoundingClientRect();
      const projectBarHeight = window.innerWidth < 768 ? 120 : 96;
      const moreProjectsBarHeight = window.innerWidth < 768 ? 84 : 92;
      const moreProjectsOffset = headerOffset + projectBarHeight;
      const footerTop = document.querySelector(".footer-area")?.getBoundingClientRect().top;
      const shouldDockMoreProjects =
        moreProjectsRect.top <= moreProjectsOffset &&
        typeof footerTop === "number" &&
        footerTop <= moreProjectsOffset + moreProjectsBarHeight;

      setDockMoreProjectsHeading(shouldDockMoreProjects);
      setShowMoreProjectsHeading(
        moreProjectsRect.top <= moreProjectsOffset && !shouldDockMoreProjects
      );
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateStickyHeadings);
    };

    updateStickyHeadings();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [project.slug, moreProjects.length]);

  useEffect(() => {
    document.body.classList.toggle(
      "project-detail-heading-visible",
      showStickyHeading || showMoreProjectsHeading
    );

    return () => {
      document.body.classList.remove("project-detail-heading-visible");
    };
  }, [showStickyHeading, showMoreProjectsHeading]);

  return (
    <div className="single-project-section cad-project-detail">
      <section className="cad-project-detail__hero" ref={heroRef}>
        <img src={project.featuredImage} alt={project.title} />
        <div className="cad-project-detail__hero-overlay">
          <div className="container">
            <p className="cad-project-detail__eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <div className="cad-project-detail__quick-meta" aria-label="Datos principales">
              {[project.location, project.year, project.status].filter(Boolean).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        className={`cad-project-detail__sticky-heading ${
          showStickyHeading ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center cad-project-detail__sticky-inner">
            <div className="col-xl-4 col-lg-3">
              <h2>{project.title}</h2>
            </div>
            <div className="col-xl-8 col-lg-9">
              <div className="cad-project-detail__sticky-meta">
                {[project.category, project.location, project.year, project.status].filter(Boolean).map((item) => (
                  <small key={item}>{item}</small>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {moreProjects.length > 0 && (
        <div
          className={`cad-more-projects__sticky-heading ${
            showMoreProjectsHeading || dockMoreProjectsHeading ? "is-visible" : ""
          } ${dockMoreProjectsHeading ? "is-docked" : ""}`}
        >
          <div className="container">
            <div className="cad-more-projects__sticky-inner">
              <h2>
                Más proyectos
                <span className="cad-more-projects__down-arrow" aria-hidden="true">&gt;</span>
              </h2>

              <Link to="/project-standard" className="cad-more-projects__archive-link">
                Ir a la sección proyectos
                <i className="las la-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="project-details-wrapper cad-project-detail__body">
          <section className="cad-project-detail__summary-grid">
            <div className="cad-project-detail__summary-cell cad-project-detail__summary-cell--info">
              <InfoSidebar info={info} />
            </div>

            <div className="cad-project-detail__summary-cell cad-project-detail__summary-cell--description">
              <div className="cad-project-detail__intro">
                <span>Descripción</span>
                {(overviewParagraphs.length ? overviewParagraphs : [""]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <figure className="cad-project-detail__summary-image">
              <img src={detailImage} alt={`${project.title} - imagen de apoyo`} loading="lazy" />
            </figure>
          </section>

          <Gallery images={project.gallery} title="Galería" />

          <div className="cad-project-detail__text-grid">
            {concept.paragraphs.length > 0 && <TextBlock section={concept} />}

            {conclusion.paragraphs.length > 0 && (
              <TextBlock section={conclusion} />
            )}
          </div>

          {moreProjects.length > 0 && (
            <section className="cad-more-projects" aria-label="Más proyectos" ref={moreProjectsRef}>
              <div className="cad-more-projects__header">
                <h2>
                  Más proyectos
                  <span className="cad-more-projects__down-arrow" aria-hidden="true">&gt;</span>
                </h2>

                <Link to="/project-standard" className="cad-more-projects__archive-link">
                  Ir a la sección proyectos
                  <i className="las la-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>

              <div className="cad-more-projects__grid">
                {moreProjects.map((relatedProject) => (
                  <Link
                    to={`/project-details/${relatedProject.slug}`}
                    className="cad-more-projects__card"
                    key={relatedProject.slug}
                  >
                    <img src={relatedProject.thumbnail} alt={relatedProject.title} loading="lazy" />
                    <div>
                      <span>{relatedProject.category}</span>
                      <h3>{relatedProject.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
