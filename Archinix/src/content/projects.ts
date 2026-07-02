import { content } from "./useContent";
import placeholderImages from "./placeholder-images.json";

interface ProjectMeta {
  titulo?: string;
  slug?: string;
  categoria?: string;
  ubicacion?: string;
  anio?: string;
  cliente?: string;
  arquitecto?: string;
  superficie?: string;
  estado?: string;
  portada?: string;
  galeria?: string[];
}

export interface ProjectContent {
  id: number;
  folder: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  architect: string;
  surface: string;
  status: string;
  cover: string;
  gallery: string[];
  summary: string;
  description: string[];
  concept: string[];
  result: string[];
}

const markdownFiles = import.meta.glob("../../PROYECTOS/*/proyecto.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const projectPlaceholders = placeholderImages.proyectos;

const genericCopy = {
  summary:
    "Proyecto desarrollado por el estudio con foco en funcionalidad, estética y calidad constructiva.",
  description: [
    "Desarrollo arquitectónico integral que integra diseño, planificación y ejecución bajo estándares técnicos del estudio.",
    "La propuesta prioriza la experiencia del usuario, la eficiencia espacial y la coherencia material en cada etapa del proyecto.",
  ],
  concept: [
    "Concepto basado en líneas claras, proporciones equilibradas y una lectura contemporánea del espacio.",
  ],
  result: [
    "Resultado alineado con los objetivos del encargo, con soluciones constructivas eficientes y acabados de calidad.",
  ],
};

function getFolder(path: string) {
  const parts = path.split("/");
  const projectsIndex = parts.findIndex((part) => part === "PROYECTOS");

  return parts[projectsIndex + 1] ?? "Proyecto";
}

function parseFrontmatter(markdown: string): {
  meta: ProjectMeta;
  body: string;
} {
  if (!markdown.startsWith("---")) {
    return { meta: {}, body: markdown };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { meta: {}, body: markdown };
  }

  const block = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).trim();
  const meta: ProjectMeta = {};
  const lines = block.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);

    if (!match) {
      continue;
    }

    const key = match[1] as keyof ProjectMeta;
    const rawValue = match[2].trim();

    if (key === "galeria") {
      const values: string[] = [];
      let nextIndex = index + 1;

      while (nextIndex < lines.length) {
        const galleryMatch = lines[nextIndex].match(/^\s*-\s*(.*)$/);
        if (!galleryMatch) {
          break;
        }

        values.push(galleryMatch[1].trim().replace(/^["']|["']$/g, ""));
        nextIndex += 1;
      }

      meta.galeria = values;
      index = nextIndex - 1;
    } else {
      meta[key] = rawValue.replace(/^["']|["']$/g, "") as never;
    }
  }

  return { meta, body };
}

function getPlaceholderCover(index: number) {
  if (!projectPlaceholders.length) {
    return "/media/proyectos/img-01.jpg";
  }

  return projectPlaceholders[index % projectPlaceholders.length];
}

function getPlaceholderGallery(index: number) {
  if (!projectPlaceholders.length) {
    return ["/media/proyectos/img-01.jpg"];
  }

  const length = projectPlaceholders.length;

  return [
    projectPlaceholders[index % length],
    projectPlaceholders[(index + 1) % length],
    projectPlaceholders[(index + 2) % length],
  ];
}

function formatProjectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export const PROJECT_CATEGORIES = content.projectCategories;

const sortedProjectEntries = Object.entries(markdownFiles)
  .filter(([path]) => !path.includes("/Ejemplo/"))
  .sort(([pathA], [pathB]) =>
    getFolder(pathA).localeCompare(getFolder(pathB), "es")
  );

export const projects: ProjectContent[] = sortedProjectEntries.map(
  ([path, markdown], index) => {
    const folder = getFolder(path);
    const { meta } = parseFrontmatter(markdown);
    const number = formatProjectNumber(index);

    return {
      id: index + 1,
      folder,
      slug: `proyecto-${number}`,
      title: `Proyecto ${number}`,
      category: meta.categoria || "Proyecto",
      location: "",
      year: "",
      client: "",
      architect: content.site.director,
      surface: "",
      status: "Referencia",
      cover: getPlaceholderCover(index),
      gallery: getPlaceholderGallery(index),
      summary: genericCopy.summary,
      description: genericCopy.description,
      concept: genericCopy.concept,
      result: genericCopy.result,
    };
  }
);

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}
