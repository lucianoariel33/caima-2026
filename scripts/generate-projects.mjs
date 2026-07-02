import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "PROYECTOS");

const projects = [
  {
    folder: "Triunvirato-5825",
    titulo: "Triunvirato 5825",
    slug: "triunvirato-5825",
    categoria: "Comercial",
    ubicacion: "Villa Urquiza, CABA",
    descripcion:
      "Estacionamiento Premium con cuatro niveles de cocheras con tecnologia de ultima generacion.",
  },
  {
    folder: "Olazabal-Pacheco",
    titulo: "Olazabal y Pacheco",
    slug: "olazabal-pacheco",
    categoria: "Comercial",
    ubicacion: "Villa Urquiza, CABA",
    descripcion:
      "Local comercial en doble altura con entrepiso. Se diseno bajo el concepto de High Tech con estructura metalica y grandes panos de vidriados y semicubiertos resueltos en quiebra a modo de proteccion solar para el entrepiso.",
  },
  {
    folder: "Serrano-706",
    titulo: "Serrano 706",
    slug: "serrano-706",
    categoria: "Comercial",
    ubicacion: "Villa Crespo, CABA",
    descripcion:
      "Local comercial en doble altura en el corazon comercial de Villa Crespo. Se resolvio con grandes vidrieras y semicubiertos de hormigon a la vista.",
  },
  {
    folder: "La-Salamandra",
    titulo: "La Salamandra",
    slug: "la-salamandra",
    categoria: "Comercial",
    ubicacion: "El Salvador 4761, Palermo, CABA",
    descripcion:
      "Direccion de obra de la ejecucion del proyecto gastronomico La Salamandra en zona de Palermo.",
  },
  {
    folder: "Avalos-2085",
    titulo: "Avalos 2085",
    slug: "avalos-2085",
    categoria: "Comercial",
    ubicacion: "Villa Urquiza, CABA",
    descripcion:
      "Local comercial en planta baja en la zona mas comercial de Villa Urquiza.",
  },
  {
    folder: "Santa-Magdalena-1551",
    titulo: "Santa Magdalena 1551",
    slug: "santa-magdalena-1551",
    categoria: "Industrial",
    ubicacion: "Barracas, CABA",
    superficie: "1800 m2",
    descripcion: "Depositos con oficinas de 1800 metros cuadrados.",
  },
  {
    folder: "Boulogne-Sur-Mer-2441",
    titulo: "Boulogne Sur Mer 2441",
    slug: "boulogne-sur-mer-2441",
    categoria: "Industrial",
    ubicacion: "San Martin, Buenos Aires",
    superficie: "900 m2",
    descripcion: "Deposito con oficinas de 900 metros cuadrados.",
  },
  {
    folder: "Vieytes-1661",
    titulo: "Vieytes 1661",
    slug: "vieytes-1661",
    categoria: "Oficinas",
    ubicacion: "Barracas, CABA",
    superficie: "1500 m2",
    descripcion:
      "Edificio de oficinas en cuatro niveles y una planta baja con deposito industrial de 1500 metros cuadrados y estacionamiento de cortesia. Resuelto con fachada ventilada con paneles compuestos y piel de vidrio.",
  },
  {
    folder: "Avalos-2087-Oficina",
    titulo: "Avalos 2087 Oficina",
    slug: "avalos-2087-oficina",
    categoria: "Oficinas",
    ubicacion: "Villa Urquiza, CABA",
    descripcion:
      "Oficina comercial para renta en el centro comercial de Villa Urquiza.",
  },
  {
    folder: "Orthodent-Junin-750",
    titulo: "Oficinas Orthodent",
    slug: "orthodent-junin-750",
    categoria: "Oficinas",
    ubicacion: "Junin 750, Centro, CABA",
    descripcion:
      "Oficina de venta de la firma Orthodent. Se resolvio con piso de linoleum de gran versatilidad donde se pudo plasmar la imagen de la empresa.",
  },
  {
    folder: "Mendoza-Puerto-Madero",
    titulo: "Oficinas Mendoza Despachante",
    slug: "mendoza-puerto-madero",
    categoria: "Oficinas",
    ubicacion: "Puerto Madero, CABA",
    descripcion:
      "Puestos de trabajo, iluminacion puntual y mobiliario para la empresa Mendoza despachantes de aduana.",
  },
  {
    folder: "Olazabal-Garden",
    titulo: "Olazabal Garden",
    slug: "olazabal-garden",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Olazabal 631, Ituzaingo, Buenos Aires",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Alvear-Garden",
    titulo: "Alvear Garden",
    slug: "alvear-garden",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Alvear 980, Ituzaingo, Buenos Aires",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Erreve-Garde",
    titulo: "Erre-ve Garde",
    slug: "erreve-garde",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Rivadavia 20190, Castelar, Buenos Aires",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Townhouse-Maranon-1202",
    titulo: "Townhouse Marañon 1202",
    slug: "townhouse-maranon-1202",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Marañon 1202, Ituzaingo, Buenos Aires",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Honorio-Pueyrredon-15",
    titulo: "Honorio Pueyrredon 15",
    slug: "honorio-pueyrredon-15",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Ituzaingo Norte, Buenos Aires",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Townhouse-DWT",
    titulo: "Townhouse DWT",
    slug: "townhouse-dwt",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Buenos Aires",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Durban-Mansilla-1",
    titulo: "Edificio Durban Mansilla 1",
    slug: "durban-mansilla-1",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Ituzaingo, Buenos Aires",
    anio: "2014-2016",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Durban-Mansilla-2",
    titulo: "Edificio Durban Mansilla 2",
    slug: "durban-mansilla-2",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Ituzaingo, Buenos Aires",
    anio: "2011-2012",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Avalos-2087-Multifamiliar",
    titulo: "Avalos 2087 Multifamiliar",
    slug: "avalos-2087-multifamiliar",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Villa Urquiza, CABA",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Olazabal-4803",
    titulo: "Olazabal 4803",
    slug: "olazabal-4803",
    categoria: "Vivienda Multifamiliar",
    ubicacion: "Villa Urquiza, CABA",
    descripcion: "Gestion y direccion de proyecto.",
  },
  {
    folder: "Parque-Leloir",
    titulo: "Casa Parque Leloir",
    slug: "parque-leloir",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Ituzaingo, Provincia de Buenos Aires",
    anio: 2015,
    superficie: "600 m2",
    descripcion: "Casa estilo americano con 600 metros cuadrados cubiertos.",
  },
  {
    folder: "Villa-Antonio-Juana-Koslay",
    titulo: "Casa Barrio Villa Antonio",
    slug: "villa-antonio-juana-koslay",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Juana Koslay, San Luis",
    anio: 2014,
    descripcion: "Casa estilo campo al borde de las sierras puntanas.",
  },
  {
    folder: "Club-Campo-El-Nacional",
    titulo: "Casa Club de Campo El Nacional",
    slug: "club-campo-el-nacional",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "General Rodriguez, Provincia de Buenos Aires",
    anio: 2016,
    descripcion: "Casa estilo campo argentino.",
  },
  {
    folder: "Juana-Koslay-I",
    titulo: "Casa Juana Koslay I",
    slug: "juana-koslay-i",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Juana Koslay, San Luis",
    anio: 2013,
    descripcion: "Casa estilo moderno.",
  },
  {
    folder: "Juana-Koslay-II",
    titulo: "Casa Juana Koslay II",
    slug: "juana-koslay-ii",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Juana Koslay, San Luis",
    anio: 2013,
    descripcion: "Casa estilo moderno.",
  },
  {
    folder: "Valeria-Del-Mar-2012",
    titulo: "Casa Valeria del Mar 2012",
    slug: "valeria-del-mar-2012",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Valeria del Mar, Partido de la Costa",
    anio: 2012,
    descripcion: "Casa estilo moderno.",
  },
  {
    folder: "Valeria-Del-Mar-2011",
    titulo: "Casa Valeria del Mar 2011",
    slug: "valeria-del-mar-2011",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Valeria del Mar, Partido de la Costa",
    anio: 2011,
    descripcion: "Casa estilo moderno.",
  },
  {
    folder: "Barrio-Los-Sauces-Pilar",
    titulo: "Barrio Los Sauces",
    slug: "barrio-los-sauces-pilar",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "Pilar, Buenos Aires",
    descripcion: "Proyecto residencial en barrio cerrado.",
  },
  {
    folder: "Terravista-General-Rodriguez",
    titulo: "Casa Barrio Terravista",
    slug: "terravista-general-rodriguez",
    categoria: "Vivienda Unifamiliar",
    ubicacion: "General Rodriguez, Provincia de Buenos Aires",
    anio: 2010,
    descripcion: "Casa estilo colonial argentino.",
  },
  {
    folder: "Diseno-Integral-Terminaciones",
    titulo: "Diseno Integral en Terminaciones",
    slug: "diseno-integral-terminaciones",
    categoria: "Diseño Integral",
    ubicacion: "Buenos Aires",
    descripcion: "Diseno integral en terminaciones.",
  },
  {
    folder: "Diseno-Stand-Institucional",
    titulo: "Diseno de Stand e Imagen Institucional",
    slug: "diseno-stand-imagen-institucional",
    categoria: "Diseño Integral",
    ubicacion: "Buenos Aires",
    descripcion: "Diseno de stand e imagen institucional.",
  },
  {
    folder: "Diseno-Mobiliario-Comercial",
    titulo: "Diseno de Mobiliario Comercial",
    slug: "diseno-mobiliario-comercial",
    categoria: "Diseño Integral",
    ubicacion: "Buenos Aires",
    descripcion: "Diseno de mobiliario comercial.",
  },
];

function buildMarkdown(project) {
  const lines = [
    "---",
    `titulo: "${project.titulo}"`,
    `slug: "${project.slug}"`,
    `categoria: "${project.categoria}"`,
    `ubicacion: "${project.ubicacion}"`,
  ];

  if (project.anio) lines.push(`anio: "${project.anio}"`);
  if (project.superficie) lines.push(`superficie: "${project.superficie}"`);
  lines.push(`estado: "Finalizado"`);
  lines.push(`portada: "./fotos/portada.jpg"`);
  lines.push("galeria:");
  lines.push('  - "./fotos/galeria-1.jpg"');
  lines.push('  - "./fotos/galeria-2.jpg"');
  lines.push("---", "", `# ${project.titulo}`, "", "## Resumen", "", project.descripcion, "", "## Descripcion", "", project.descripcion, "", "## Concepto", "", "Proyecto desarrollado por el estudio.", "", "## Resultado", "", "Obra finalizada segun planificacion del proyecto.", "");

  return lines.join("\n");
}

rmSync(root, { recursive: true, force: true });
mkdirSync(root, { recursive: true });
writeFileSync(join(root, "README.md"), `# PROYECTOS\n\nCarpetas generadas desde el listado del estudio.\n`);

for (const project of projects) {
  const folderPath = join(root, project.folder);
  mkdirSync(folderPath, { recursive: true });
  writeFileSync(join(folderPath, "proyecto.md"), buildMarkdown(project), "utf8");
}

console.log(`Generados ${projects.length} proyectos.`);
