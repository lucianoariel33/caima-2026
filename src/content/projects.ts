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
    "Proyecto desarrollado por el estudio con foco en funcionalidad, calidad constructiva y seguimiento técnico.",
  description:
    "Desarrollo integral que reúne diseño, documentación, coordinación y ejecución bajo criterios técnicos del estudio.",
  concept:
    "Concepto basado en decisiones claras, proporciones equilibradas y una lectura contemporánea del espacio.",
  result:
    "Resultado alineado con los objetivos del encargo, con soluciones constructivas eficientes y terminaciones cuidadas.",
};

const categoryCopy: Record<
  string,
  {
    summary: string;
    description: string;
    concept: string;
    result: string;
  }
> = {
  Comercial: {
    summary: "Proyecto comercial resuelto con foco en identidad, operación diaria y experiencia de uso.",
    description:
      "Intervención orientada a ordenar el funcionamiento del espacio, reforzar la presencia de marca y resolver detalles constructivos con precisión.",
    concept:
      "La propuesta equilibra circulación, exposición, confort y materialidad para que el espacio trabaje a favor de la actividad.",
    result:
      "Un ámbito comercial claro y eficiente, pensado para recibir usuarios y sostener el uso cotidiano.",
  },
  Industrial: {
    summary: "Proyecto industrial desarrollado con prioridad en eficiencia, operación y resolución técnica.",
    description:
      "Trabajo orientado a ordenar superficies, circulaciones, infraestructura y etapas de ejecución con criterios funcionales.",
    concept:
      "La arquitectura acompaña la lógica productiva: estructura clara, mantenimiento simple y decisiones constructivas eficientes.",
    result:
      "Un espacio robusto y operativo, alineado con las necesidades técnicas del encargo.",
  },
  Oficinas: {
    summary: "Espacio de trabajo diseñado para mejorar operación, imagen institucional y confort de uso.",
    description:
      "Proyecto enfocado en distribuir áreas de trabajo, reunión y apoyo con una imagen profesional y una lectura espacial ordenada.",
    concept:
      "La propuesta busca equilibrio entre funcionalidad, representación y bienestar cotidiano.",
    result:
      "Oficinas claras, flexibles y coherentes con la dinámica de trabajo del cliente.",
  },
  "Vivienda Multifamiliar": {
    summary: "Desarrollo residencial multifamiliar con foco en eficiencia espacial, calidad constructiva y valor de uso.",
    description:
      "Proyecto y seguimiento de obra orientados a resolver unidades habitacionales, áreas comunes y criterios técnicos de ejecución.",
    concept:
      "La propuesta trabaja proporciones, iluminación, circulación y materialidad para lograr viviendas funcionales y durables.",
    result:
      "Un desarrollo residencial ordenado, construido con criterios de calidad y una lectura contemporánea.",
  },
  "Vivienda Unifamiliar": {
    summary: "Vivienda proyectada a partir del modo de habitar, el sitio y la calidad de sus espacios cotidianos.",
    description:
      "Diseño residencial que organiza programa, recorridos, luz natural y relación interior-exterior según las necesidades del cliente.",
    concept:
      "La casa se piensa desde el uso real: ambientes claros, buena escala y decisiones materiales consistentes.",
    result:
      "Una vivienda funcional y personal, resuelta con atención al detalle constructivo.",
  },
  "Diseño Integral": {
    summary: "Diseño integral desarrollado para unificar materialidad, terminaciones, equipamiento y uso del espacio.",
    description:
      "Intervención enfocada en transformar la experiencia interior mediante decisiones coordinadas de diseño, obra y terminación.",
    concept:
      "Cada elemento se define como parte de un sistema: proporción, textura, iluminación y funcionalidad.",
    result:
      "Un espacio más coherente, cómodo y terminado con una identidad clara.",
  },
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

function humanizeFolder(folder: string) {
  return folder.replace(/-/g, " ");
}

function parseSections(body: string) {
  const sections: Record<string, string[]> = {};
  const blocks = body.split(/^##\s+/m).map((block) => block.trim()).filter(Boolean);

  blocks.forEach((block) => {
    const [titleLine, ...rest] = block.split(/\r?\n/);
    const key = titleLine.trim().toLowerCase();
    const text = rest
      .join("\n")
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
      .filter(Boolean);

    if (key) {
      sections[key] = text;
    }
  });

  return sections;
}

function isGenericParagraph(text: string) {
  const normalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    normalized.length < 32 ||
    normalized.includes("gestion y direccion de proyecto") ||
    normalized.includes("proyecto desarrollado por el estudio") ||
    normalized.includes("obra finalizada segun planificacion")
  );
}

function getMeaningfulParagraphs(
  sections: Record<string, string[]>,
  key: string,
  fallback: string[]
) {
  const paragraphs = sections[key] ?? [];
  const useful = paragraphs.filter((paragraph) => !isGenericParagraph(paragraph));

  return useful.length ? useful : fallback;
}

function buildProjectCopy(meta: ProjectMeta, body: string) {
  const sections = parseSections(body);
  const copy = categoryCopy[meta.categoria ?? ""] ?? genericCopy;
  const title = meta.titulo ?? "Proyecto";
  const summaryParts = [
    copy.summary,
    meta.ubicacion ? `Ubicación: ${meta.ubicacion}.` : "",
    meta.estado ? `Estado: ${meta.estado}.` : "",
  ].filter(Boolean);

  return {
    summary: getMeaningfulParagraphs(sections, "resumen", [summaryParts.join(" ")])[0],
    description: getMeaningfulParagraphs(sections, "descripcion", [
      `${title} forma parte del recorrido del estudio en ${meta.categoria ?? "arquitectura"}. ${copy.description}`,
    ]),
    concept: getMeaningfulParagraphs(sections, "concepto", [copy.concept]),
    result: getMeaningfulParagraphs(sections, "resultado", [copy.result]),
  };
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
    const { meta, body } = parseFrontmatter(markdown);
    const number = formatProjectNumber(index);
    const projectCopy = buildProjectCopy(meta, body);

    return {
      id: index + 1,
      folder,
      slug: meta.slug || `proyecto-${number}`,
      title: meta.titulo || humanizeFolder(folder),
      category: meta.categoria || "Proyecto",
      location: meta.ubicacion || "",
      year: meta.anio || "",
      client: meta.cliente || "",
      architect: content.site.director,
      surface: "",
      status: meta.estado || "Referencia",
      cover: getPlaceholderCover(index),
      gallery: getPlaceholderGallery(index),
      summary: projectCopy.summary,
      description: projectCopy.description,
      concept: projectCopy.concept,
      result: projectCopy.result,
    };
  }
);

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}
