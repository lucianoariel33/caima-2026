import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sliderDir = path.join(root, "public", "media", "slider");
const estructuraDir = path.join(root, "public", "ESTRUCTURA");

/**
 * Slots de imagen fija: nombre base (sin extensión) → [ancho, alto].
 * Las fotos se generan desde el slider, recortadas con cover al tamaño indicado.
 */
const IMAGE_SLOTS = {
  layout_offcanvas: [1315, 902],
  feature_fondo: [1920, 683],
  cta_principal: [1900, 760],
  cta_contacto: [1900, 760],
  cta_pricing: [1900, 760],
  breadcrumb_about: [1920, 480],
  breadcrumb_servicios: [1920, 480],
  breadcrumb_proyectos: [1920, 480],
  breadcrumb_contact: [1920, 480],
  breadcrumb_blog: [1920, 480],
  breadcrumb_equipo: [1920, 480],
  breadcrumb_faq: [1920, 480],
  breadcrumb_pricing: [1920, 480],
  breadcrumb_process: [1920, 480],
  breadcrumb_testimonios: [1920, 480],
  breadcrumb_process_imagen: [890, 664],
  seccion_about_page: [1100, 893],
  seccion_about_01: [1000, 1000],
  video_fondo: [1920, 1080],
  hero_home_01: [1920, 1100],
  hero_home_03: [800, 1000],
  sliderprincipal_01: [1920, 1080],
  sliderprincipal_02: [1920, 1080],
  sliderprincipal_03: [1920, 1080],
  faq_imagen: [1920, 902],
  process_imagen: [890, 664],
  services_fondo: [1920, 683],
  team_fondo: [1920, 1080],
  seccion_testimonial_01: [500, 603],
  seccion_testimonial_02: [500, 603],
  seccion_testimonial_03: [500, 634],
  seccion_servicio_01: [738, 1024],
  seccion_servicio_02: [738, 1024],
  seccion_servicio_03: [738, 1024],
  seccion_servicio_04: [738, 1024],
  seccion_servicio_05: [738, 1024],
  seccion_servicio_06: [738, 1024],
  seccion_timeline_01: [850, 570],
  seccion_timeline_02: [850, 570],
  seccion_timeline_03: [850, 570],
  seccion_timeline_04: [850, 571],
  seccion_timeline_05: [850, 570],
  seccion_equipo_01: [800, 900],
  seccion_equipo_02: [800, 900],
  seccion_equipo_03: [800, 900],
  seccion_equipo_04: [800, 900],
  seccion_equipo_05: [800, 900],
  seccion_equipo_06: [800, 900],
  seccion_cliente_01: [120, 120],
  seccion_cliente_02: [120, 120],
  seccion_cliente_03: [120, 120],
  seccion_cliente_04: [120, 120],
};

const SLIDER_TARGET = [1920, 1080];

function sizedFilename(baseName, width, height, ext = ".jpg") {
  return `${baseName}_${width}x${height}${ext}`;
}

function getSliderSources() {
  const exampleDir = path.join(root, "imagen ejemplos", "slider");
  const dirs = [exampleDir, sliderDir].filter((dir) => fs.existsSync(dir));

  const files = [];
  for (const dir of dirs) {
    for (const file of fs.readdirSync(dir)) {
      if (/^slide-\d+(_\d+x\d+)?\.(jpe?g|webp)$/i.test(file)) {
        files.push(path.join(dir, file));
      }
    }
  }

  const uniqueByIndex = new Map();
  for (const filePath of files) {
    const match = path.basename(filePath).match(/^slide-(\d+)/i);
    if (match) {
      uniqueByIndex.set(Number(match[1]), filePath);
    }
  }

  return [...uniqueByIndex.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, filePath]) => filePath);
}

async function exportCover(sourcePath, outputPath, width, height) {
  await sharp(sourcePath)
    .rotate()
    .resize(width, height, { fit: "cover", position: "centre" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outputPath);
}

async function main() {
  fs.mkdirSync(estructuraDir, { recursive: true });

  const sliderSources = getSliderSources();
  if (sliderSources.length === 0) {
    throw new Error("No hay imágenes en public/media/slider/");
  }

  const pathMap = {};
  let sliderIndex = 0;

  const nextSlider = () => {
    const source = sliderSources[sliderIndex % sliderSources.length];
    sliderIndex += 1;
    return source;
  };

  console.log("--- Slider hero (1920x1080) ---");
  for (const sourcePath of sliderSources) {
    const baseName = path
      .basename(sourcePath, path.extname(sourcePath))
      .replace(/_\d+x\d+$/, "");
    const [width, height] = SLIDER_TARGET;
    const destName = sizedFilename(baseName, width, height);
    const destPath = path.join(sliderDir, destName);

    await exportCover(sourcePath, destPath, width, height);

    const legacyUrl = `/media/slider/${baseName}.jpg`;
    const newUrl = `/media/slider/${destName}`;
    pathMap[legacyUrl] = newUrl;
    pathMap[`/media/slider/${destName}`] = newUrl;

    console.log(`  ${path.basename(sourcePath)} -> ${destName}`);
  }

  console.log("\n--- ESTRUCTURA ---");
  for (const [baseName, [width, height]] of Object.entries(IMAGE_SLOTS)) {
    const destName = sizedFilename(baseName, width, height);
    const destPath = path.join(estructuraDir, destName);
    const sourcePath = nextSlider();

    await exportCover(sourcePath, destPath, width, height);

    const legacyNames = [
      `${baseName}.jpg`,
      `${baseName}.jpeg`,
      `${baseName}.webp`,
    ];

    for (const legacyName of legacyNames) {
      pathMap[`/ESTRUCTURA/${legacyName}`] = `/ESTRUCTURA/${destName}`;
    }

    console.log(`  ${destName}  (${width}x${height})`);
  }

  const manifestPath = path.join(root, "src", "content", "image-path-map.json");
  fs.writeFileSync(manifestPath, `${JSON.stringify(pathMap, null, 2)}\n`);

  console.log(`\nMapa de rutas: ${manifestPath}`);
  console.log(`Total: ${Object.keys(pathMap).length} reemplazos`);

  console.log("\n--- Limpieza de archivos anteriores ---");
  let removed = 0;

  for (const [oldUrl] of Object.entries(pathMap)) {
    if (!oldUrl.startsWith("/ESTRUCTURA/") && !oldUrl.startsWith("/media/slider/")) {
      continue;
    }

    const newUrl = pathMap[oldUrl];
    if (oldUrl === newUrl) continue;

    const relative = oldUrl.replace(/^\//, "");
    const oldPath = path.join(root, "public", relative);

    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
      console.log(`  Eliminado: ${relative}`);
      removed += 1;
    }
  }

  console.log(`\n${removed} archivo(s) anterior(es) eliminado(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
