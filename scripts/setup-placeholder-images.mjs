import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Umbral RGB para detectar bordes negros de renders CAD. */
const BLACK_BORDER_THRESHOLD = 20;

/**
 * Detecta el rectángulo útil recortando márgenes negros uniformes.
 * Evita que renders con letterboxing aparezcan con franjas en el hero slider.
 */
async function detectContentBounds(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isDark = (r, g, b) =>
    r <= BLACK_BORDER_THRESHOLD &&
    g <= BLACK_BORDER_THRESHOLD &&
    b <= BLACK_BORDER_THRESHOLD;

  let top = 0;
  let bottom = height - 1;
  let left = 0;
  let right = width - 1;

  outer: for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * channels;
      if (!isDark(data[index], data[index + 1], data[index + 2])) {
        top = y;
        break outer;
      }
    }
  }

  outer: for (let y = height - 1; y >= 0; y -= 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * channels;
      if (!isDark(data[index], data[index + 1], data[index + 2])) {
        bottom = y;
        break outer;
      }
    }
  }

  outer: for (let x = 0; x < width; x += 1) {
    for (let y = top; y <= bottom; y += 1) {
      const index = (y * width + x) * channels;
      if (!isDark(data[index], data[index + 1], data[index + 2])) {
        left = x;
        break outer;
      }
    }
  }

  outer: for (let x = width - 1; x >= 0; x -= 1) {
    for (let y = top; y <= bottom; y += 1) {
      const index = (y * width + x) * channels;
      if (!isDark(data[index], data[index + 1], data[index + 2])) {
        right = x;
        break outer;
      }
    }
  }

  const cropWidth = right - left + 1;
  const cropHeight = bottom - top + 1;
  const hasBlackBorder =
    top > 0 ||
    left > 0 ||
    bottom < height - 1 ||
    right < width - 1;

  return {
    hasBlackBorder,
    left,
    top,
    width: cropWidth,
    height: cropHeight,
  };
}

async function writeProcessedImage(inputPath, outputPath) {
  const bounds = await detectContentBounds(inputPath);
  let pipeline = sharp(inputPath).rotate();

  if (bounds.hasBlackBorder) {
    pipeline = pipeline.extract({
      left: bounds.left,
      top: bounds.top,
      width: bounds.width,
      height: bounds.height,
    });
  }

  const ext = path.extname(outputPath).toLowerCase();

  if (ext === ".webp") {
    await pipeline.webp({ quality: 88 }).toFile(outputPath);
    return bounds.hasBlackBorder;
  }

  await pipeline.jpeg({ quality: 90, mozjpeg: true }).toFile(outputPath);
  return bounds.hasBlackBorder;
}

async function copyWithGenericNames(srcDir, destDir, prefix, urlSegment) {
  if (!fs.existsSync(srcDir)) {
    console.warn(`No existe: ${srcDir}`);
    return [];
  }

  fs.mkdirSync(destDir, { recursive: true });

  const files = fs
    .readdirSync(srcDir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, "es"));

  const urls = [];
  let croppedCount = 0;

  for (const [index, file] of files.entries()) {
    const ext = path.extname(file).replace(/\.jpeg$/i, ".jpg").toLowerCase();
    const normalizedExt = ext === ".jpeg" ? ".jpg" : ext;
    const destName = `${prefix}-${String(index + 1).padStart(2, "0")}${normalizedExt}`;
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, destName);

    const cropped = await writeProcessedImage(srcPath, destPath);
    if (cropped) {
      croppedCount += 1;
      console.log(`  Recortado: ${file} -> ${destName}`);
    }

    urls.push(`/media/${urlSegment}/${destName}`);
  }

  if (croppedCount > 0) {
    console.log(`  ${croppedCount} imagen(es) con bordes negros recortadas en ${urlSegment}`);
  }

  return urls;
}

const sliderImages = await copyWithGenericNames(
  path.join(root, "imagen ejemplos", "slider"),
  path.join(root, "public", "media", "slider"),
  "slide",
  "slider"
);

const projectImages = await copyWithGenericNames(
  path.join(root, "imagen ejemplos", "proyectos"),
  path.join(root, "public", "media", "proyectos"),
  "img",
  "proyectos"
);

const manifest = {
  slider: sliderImages,
  proyectos: projectImages,
};

fs.writeFileSync(
  path.join(root, "src", "content", "placeholder-images.json"),
  `${JSON.stringify(manifest, null, 2)}\n`
);

console.log(`Slider: ${sliderImages.length} imagenes`);
console.log(`Proyectos: ${projectImages.length} imagenes`);
