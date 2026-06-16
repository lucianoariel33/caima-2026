import Counter from "@components/Counter/Counter";
import Gallery from "./Gallery";
import InfoSidebar from "./InfoSidebar";
import Overview from "./Overview";
import TextBlock from "./TextBlock";
import type { ProjectContent } from "@/content/projects";

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
  const overview: ParagraphSection = {
    title: "Descripcion",
    paragraphs: project.description.length
      ? project.description
      : [project.summary].filter(Boolean),
  };
  const info: InfoItem[] = [
    { label: "Ano", value: project.year },
    { label: "Cliente", value: project.client },
    { label: "Arquitecto", value: project.architect },
    { label: "Ubicacion", value: project.location },
    { label: "Superficie", value: project.surface },
    { label: "Estado", value: project.status },
  ].filter((item) => item.value);
  const concept: ParagraphSection = {
    title: "Concepto",
    paragraphs: project.concept,
  };
  const conclusion: ParagraphSection = {
    title: "Resultado",
    paragraphs: project.result,
  };

  return (
    <div className="single-project-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="project-details-wrapper">
            <div className="row">
              <div className="col-xl-9">
                <Overview section={overview} />
              </div>

              <div className="col-xl-3">
                <InfoSidebar info={info} />
              </div>
            </div>

            <Gallery images={project.gallery} />

            <Counter />

            {concept.paragraphs.length > 0 && <TextBlock section={concept} />}

            {conclusion.paragraphs.length > 0 && (
              <TextBlock section={conclusion} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
