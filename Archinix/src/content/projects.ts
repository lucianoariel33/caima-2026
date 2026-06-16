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

const imageFiles = import.meta.glob(
  "../../PROYECTOS/*/fotos/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  }
) as Record<string, string>;

const fallbackCover = "/assets/img/project/1-1.jpg";
const fallbackGallery = [
  "/assets/img/project/project-details-2.jpg",
  "/assets/img/project/project-details-3.jpg",
];

function getFolder(path: string) {
  const parts = path.split("/");
  const projectsIndex = parts.findIndex((part) => part === "PROYECTOS");

  return parts[projectsIndex + 1] ?? "Proyecto";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripQuotes(value: string) {
  return value.trim().replace(/^["']|["']$/g, "");
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

        values.push(stripQuotes(galleryMatch[1]));
        nextIndex += 1;
      }

      meta.galeria = values;
      index = nextIndex - 1;
    } else {
      meta[key] = stripQuotes(rawValue) as never;
    }
  }

  return { meta, body };
}

function getSection(markdown: string, title: string) {
  const pattern = new RegExp(`## ${title}\\s*([\\s\\S]*?)(?=\\n## |$)`, "i");
  const match = markdown.match(pattern);

  if (!match) {
    return [];
  }

  return match[1]
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);
}

function resolveImage(folder: string, relativePath?: string, fallback?: string) {
  if (!relativePath) {
    return fallback ?? fallbackCover;
  }

  const normalized = relativePath.replace(/^\.\//, "");
  const key = `../../PROYECTOS/${folder}/${normalized}`;

  return imageFiles[key] ?? fallback ?? fallbackCover;
}

export const projects: ProjectContent[] = Object.entries(markdownFiles).map(
  ([path, markdown], index) => {
    const folder = getFolder(path);
    const { meta, body } = parseFrontmatter(markdown);
    const title = meta.titulo || folder;
    const galleryFromMeta = meta.galeria?.length ? meta.galeria : [];

    return {
      id: index + 1,
      folder,
      slug: meta.slug || slugify(title),
      title,
      category: meta.categoria || "Proyecto",
      location: meta.ubicacion || "",
      year: String(meta.anio || ""),
      client: meta.cliente || "",
      architect: meta.arquitecto || "",
      surface: meta.superficie || "",
      status: meta.estado || "",
      cover: resolveImage(folder, meta.portada, fallbackCover),
      gallery: galleryFromMeta.length
        ? galleryFromMeta.map((image, imageIndex) =>
            resolveImage(folder, image, fallbackGallery[imageIndex])
          )
        : fallbackGallery,
      summary: getSection(body, "Resumen")[0] || "",
      description: getSection(body, "Descripcion"),
      concept: getSection(body, "Concepto"),
      result: getSection(body, "Resultado"),
    };
  }
);

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}
