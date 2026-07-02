import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mapPath = path.join(root, "src", "content", "image-path-map.json");

if (!fs.existsSync(mapPath)) {
  console.error("Ejecutá primero: npm run setup:estructura");
  process.exit(1);
}

const pathMap = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const sortedEntries = Object.entries(pathMap).sort(
  (a, b) => b[0].length - a[0].length
);

const TARGET_DIRS = [
  path.join(root, "src"),
  path.join(root, "index.html"),
];

const EXTENSIONS = new Set([".ts", ".tsx", ".scss", ".css", ".json", ".html"]);

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  if (fs.statSync(dir).isFile()) {
    files.push(dir);
    return files;
  }

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      if (entry === "node_modules" || entry === "dist") continue;
      walk(fullPath, files);
    } else if (EXTENSIONS.has(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = TARGET_DIRS.flatMap((target) => walk(target));
let totalReplacements = 0;

for (const filePath of files) {
  if (filePath.endsWith("image-path-map.json")) continue;

  let content = fs.readFileSync(filePath, "utf8");
  let fileReplacements = 0;

  for (const [oldPath, newPath] of sortedEntries) {
    const occurrences = content.split(oldPath).length - 1;
    if (occurrences > 0) {
      content = content.split(oldPath).join(newPath);
      fileReplacements += occurrences;
    }
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`  ${path.relative(root, filePath)} (${fileReplacements})`);
    totalReplacements += fileReplacements;
  }
}

console.log(`\n${totalReplacements} referencias actualizadas.`);
