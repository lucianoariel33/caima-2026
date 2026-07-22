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
  const [showStickyHeading, setShowStickyHeading] = useState(false);
  const moreProjects = getMoreProjects(project.slug, 6);
  const overviewParagraphs = project.description.length
    ? project.description
    : [project.summary].filter(Boolean);
  const info: InfoItem[] = [
    { label: "Año", value: project.year },
    { label: "Arquitecto", value: project.architect },
    { label: "Ubicación", value: project.location },
    { label: "Estado", value: project.status },
    { label: "Superficie", value: project.surface },
    { label: "Cliente", value: project.client },
  ].filter((item) => item.value);
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

    const updateStickyHeading = () => {
      if (!heroRef.current) {
        return;
      }

      const headerOffset = window.innerWidth < 768 ? 68 : 74;
      setShowStickyHeading(heroRef.current.getBoundingClientRect().bottom <= headerOffset);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateStickyHeading);
    };

    updateStickyHeading();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [project.slug]);

  useEffect(() => {
    document.body.classList.toggle(
      "project-detail-heading-visible",
      showStickyHeading
    );

    return () => {
      document.body.classList.remove("project-detail-heading-visible");
    };
  }, [showStickyHeading]);

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

      <div className="container">
        <div className="project-details-wrapper cad-project-detail__body">
          <div className="row gx-5">
            <div className="col-xl-8">
              <div className="cad-project-detail__intro">
                <span>Descripción</span>
                {overviewParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="col-xl-4">
              <InfoSidebar info={info} />
            </div>
          </div>

          <Gallery images={project.gallery} title="Galería" />

          <div className="cad-project-detail__text-grid">
            {concept.paragraphs.length > 0 && <TextBlock section={concept} />}

            {conclusion.paragraphs.length > 0 && (
              <TextBlock section={conclusion} />
            )}
          </div>

          {moreProjects.length > 0 && (
            <section className="cad-more-projects" aria-label="Más proyectos">
              <div className="cad-more-projects__header">
                <p className="cad-project-detail__eyebrow">Portfolio</p>
                <h2>Más proyectos</h2>
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
