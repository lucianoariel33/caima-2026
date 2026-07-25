import { content } from "./useContent";

interface PortfolioManifestImage {
  role?: string;
  path: string;
  source_upload_path?: string;
  attachment_id?: number;
  title?: string;
  width?: number;
  height?: number;
}

interface PortfolioManifestProject {
  id: number;
  title: string;
  slug: string;
  folder: string;
  source_url?: string;
  categories?: string[];
  cover?: string;
  images?: PortfolioManifestImage[];
}

interface PortfolioManifest {
  project_count: number;
  projects: PortfolioManifestProject[];
}

interface AdditionalDetail {
  title?: string;
  detail?: string;
}

interface ProjectMeta {
  id?: number;
  title?: string;
  slug?: string;
  source_url?: string;
  date?: string;
  modified?: string;
  status?: string;
  categories?: string[];
  category_slugs?: string[];
  cover?: string;
  image_count?: number;
  images?: PortfolioManifestImage[];
  additional_details?: AdditionalDetail[];
}

export interface ProjectInfoItem {
  label: string;
  value: string;
}

export interface ProjectContent {
  id: number;
  sourceId: number;
  folder: string;
  slug: string;
  title: string;
  category: string;
  categories: string[];
  categorySlugs: string[];
  location: string;
  year: string;
  client: string;
  architect: string;
  surface: string;
  status: string;
  sourceUrl: string;
  publishedAt: string;
  modifiedAt: string;
  wordpressStatus: string;
  thumbnail: string;
  featuredImage: string;
  cover: string;
  gallery: string[];
  imageCount: number;
  additionalInfo: ProjectInfoItem[];
  summary: string;
  description: string[];
  concept: string[];
  result: string[];
}

const manifestFiles = import.meta.glob("../../portfolio_extraido/manifest.json", {
  eager: true,
  import: "default",
}) as Record<string, PortfolioManifest>;

const markdownFiles = import.meta.glob(
  "../../portfolio_extraido/projects/*/index.md",
  {
    eager: true,
    import: "default",
    query: "?raw",
  }
) as Record<string, string>;

const projectImageFiles = import.meta.glob(
  "../../portfolio_extraido/projects/*/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const manifest = manifestFiles["../../portfolio_extraido/manifest.json"];

export const PROJECT_CATEGORIES = content.projectCategories;

function cleanYamlValue(rawValue: string) {
  const trimmed = rawValue.trim();

  if (!trimmed || trimmed === "{}" || trimmed === "[]") {
    return "";
  }

  return trimmed.replace(/^["']|["']$/g, "");
}

function parseYamlValue(rawValue: string) {
  const value = cleanYamlValue(rawValue);

  if (/^-?\d+$/.test(value)) {
    return Number(value);
  }

  return value;
}

function parseScalarList(lines: string[], startIndex: number) {
  const values: string[] = [];
  let index = startIndex + 1;

  while (index < lines.length) {
    const line = lines[index];

    if (/^[a-zA-Z0-9_-]+:/.test(line)) {
      break;
    }

    const itemMatch = line.match(/^\s*-\s*(.*)$/);

    if (itemMatch) {
      values.push(cleanYamlValue(itemMatch[1]));
    }

    index += 1;
  }

  return { values, index: index - 1 };
}

function parseObjectList(lines: string[], startIndex: number) {
  const values: Record<string, string | number>[] = [];
  let current: Record<string, string | number> | null = null;
  let index = startIndex + 1;

  while (index < lines.length) {
    const line = lines[index];

    if (/^[a-zA-Z0-9_-]+:/.test(line)) {
      break;
    }

    const itemMatch = line.match(/^\s*-\s*([a-zA-Z0-9_-]+):\s*(.*)$/);
    const propertyMatch = line.match(/^\s+([a-zA-Z0-9_-]+):\s*(.*)$/);

    if (itemMatch) {
      current = {};
      current[itemMatch[1]] = parseYamlValue(itemMatch[2]);
      values.push(current);
    } else if (propertyMatch && current) {
      current[propertyMatch[1]] = parseYamlValue(propertyMatch[2]);
    }

    index += 1;
  }

  return { values, index: index - 1 };
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
  const lines = block.split(/\r?\n/);
  const meta: Record<string, unknown> = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);

    if (!match) {
      continue;
    }

    const key = match[1];
    const rawValue = match[2];

    if (key === "categories" || key === "category_slugs") {
      const parsed = parseScalarList(lines, index);
      meta[key] = parsed.values;
      index = parsed.index;
    } else if (key === "images" || key === "additional_details") {
      const parsed = parseObjectList(lines, index);
      meta[key] = parsed.values;
      index = parsed.index;
    } else {
      meta[key] = parseYamlValue(rawValue);
    }
  }

  return { meta: meta as ProjectMeta, body };
}

function normalizeHeading(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function parseSections(body: string) {
  const sections: { title: string; content: string }[] = [];
  const matches = [...body.matchAll(/^##\s+(.+)$/gm)];

  matches.forEach((match, index) => {
    const nextMatch = matches[index + 1];
    const start = match.index + match[0].length;
    const end = nextMatch?.index ?? body.length;

    sections.push({
      title: match[1].trim(),
      content: body.slice(start, end).trim(),
    });
  });

  return sections;
}

function isRenderableParagraph(paragraph: string) {
  const trimmed = paragraph.trim();

  return (
    trimmed.length > 0 &&
    !/^\[presto_player\b/i.test(trimmed) &&
    !/^categorias?:/i.test(trimmed) &&
    !/^-\s*`images\//i.test(trimmed)
  );
}

function toParagraphs(rawContent: string) {
  return rawContent
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(isRenderableParagraph);
}

function getSectionParagraphs(
  sections: { title: string; content: string }[],
  title: string
) {
  return sections
    .filter((section) => normalizeHeading(section.title) === normalizeHeading(title))
    .flatMap((section) => toParagraphs(section.content));
}

function getNarrativeDetails(details: AdditionalDetail[] = []) {
  return details
    .map((item) => cleanYamlValue(item.detail ?? ""))
    .filter((detail) => detail.length > 0);
}

function splitDetailTitle(title: string) {
  const separatorIndex = title.indexOf(":");

  if (separatorIndex === -1) {
    return null;
  }

  const label = title.slice(0, separatorIndex).trim();
  const value = title.slice(separatorIndex + 1).trim();

  if (!label || !value) {
    return null;
  }

  return { label, value };
}

function getYearFromDetails(details: AdditionalDetail[] = []) {
  for (const item of details) {
    const split = splitDetailTitle(item.title ?? "");

    if (split && normalizeHeading(split.label) === "ano") {
      return split.value;
    }
  }

  return "";
}

function getAdditionalInfo(details: AdditionalDetail[] = []) {
  return details.reduce<ProjectInfoItem[]>((items, item) => {
    const split = splitDetailTitle(item.title ?? "");

    if (!split || normalizeHeading(split.label) === "tipo de proyecto") {
      return items;
    }

    items.push(split);
    return items;
  }, []);
}

function getUniqueValues(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function getImageImportPath(projectFolder: string, imagePath?: string) {
  if (!imagePath) {
    return "";
  }

  if (/^(https?:)?\/\//.test(imagePath) || imagePath.startsWith("/")) {
    return imagePath;
  }

  return projectImageFiles[
    `../../portfolio_extraido/${projectFolder}/${imagePath}`.replace(/\\/g, "/")
  ] ?? "";
}

function getMarkdownForProject(projectFolder: string) {
  return (
    markdownFiles[
      `../../portfolio_extraido/${projectFolder}/index.md`.replace(/\\/g, "/")
    ] ?? ""
  );
}

function humanizeFolder(folder: string) {
  return folder.split("/").pop()?.replace(/-/g, " ") ?? "Proyecto";
}

function getProjectDescription(meta: ProjectMeta, body: string) {
  const sections = parseSections(body);
  const paragraphs = getUniqueValues([
    ...getSectionParagraphs(sections, "Descripcion"),
    ...getSectionParagraphs(sections, "Detalles del Proyecto"),
    ...getNarrativeDetails(meta.additional_details),
  ]);

  return paragraphs;
}

export const projects: ProjectContent[] = (manifest?.projects ?? []).map(
  (manifestProject, index) => {
    const markdown = getMarkdownForProject(manifestProject.folder);
    const { meta, body } = parseFrontmatter(markdown);
    const categories = meta.categories?.length
      ? meta.categories
      : manifestProject.categories ?? [];
    const imageMeta = meta.images?.length
      ? meta.images
      : manifestProject.images ?? [];
    const coverPath =
      meta.cover ||
      manifestProject.cover ||
      imageMeta.find((image) => image.role === "cover")?.path ||
      imageMeta[0]?.path ||
      "";
    const orderedImagePaths = getUniqueValues(
      imageMeta.map((image) => image.path)
    );
    const galleryPaths = orderedImagePaths.includes(coverPath)
      ? orderedImagePaths
      : [coverPath, ...orderedImagePaths].filter(Boolean);
    const gallery = galleryPaths
      .map((imagePath) => getImageImportPath(manifestProject.folder, imagePath))
      .filter(Boolean);
    const cover =
      getImageImportPath(manifestProject.folder, coverPath) || gallery[0] || "";
    const description = getProjectDescription(meta, body);

    return {
      id: index + 1,
      sourceId: meta.id || manifestProject.id,
      folder: manifestProject.folder,
      slug: meta.slug || manifestProject.slug || `proyecto-${index + 1}`,
      title:
        meta.title ||
        manifestProject.title ||
        humanizeFolder(manifestProject.folder),
      category: categories[0] ?? "",
      categories,
      categorySlugs: meta.category_slugs ?? [],
      location: "",
      year: getYearFromDetails(meta.additional_details),
      client: "",
      architect: "",
      surface: "",
      status: "",
      sourceUrl: meta.source_url || manifestProject.source_url || "",
      publishedAt: meta.date || "",
      modifiedAt: meta.modified || "",
      wordpressStatus: meta.status || "",
      thumbnail: cover,
      featuredImage: cover,
      cover,
      gallery,
      imageCount: meta.image_count || gallery.length,
      additionalInfo: getAdditionalInfo(meta.additional_details),
      summary: description[0] ?? "",
      description,
      concept: [],
      result: [],
    };
  }
);

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}

function getProjectSeed(slug: string) {
  return slug.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
}

export function getMoreProjects(currentSlug: string, limit = 6) {
  const seed = getProjectSeed(currentSlug);

  return projects
    .filter((project) => project.slug !== currentSlug)
    .sort((projectA, projectB) => {
      const scoreA = (projectA.id * 37 + seed) % 97;
      const scoreB = (projectB.id * 37 + seed) % 97;

      return scoreA - scoreB;
    })
    .slice(0, limit);
}
