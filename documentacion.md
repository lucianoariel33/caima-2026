# Documentacion de Archinix

Resumen compacto de la documentacion incluida en `Archinix-Documentaion/index.html`.

## Identidad de la plantilla

- Nombre: Archinix | Architecture & Interior Design React Template.
- Version del item: v1.0.0.
- Fecha de creacion indicada por la documentacion: 27 November 2025.
- Autor: thememarch.
- Soporte oficial: https://themeforest.net/user/thememarch
- La documentacion HTML trae el titulo de navegador "Archinix - Event & Conference React Template", pero el contenido principal identifica la plantilla como arquitectura e interiorismo.

## Requisitos

- Node.js v18 o superior.
- npm.
- Editor recomendado: cualquiera que permita trabajar React/TypeScript.

## Que incluye el paquete

- `Archinix`: plantilla React editable.
- `Archinix-Documentaion`: documentacion original en HTML con imagenes de referencia.

## Tecnologias declaradas

- React con TypeScript.
- Vite como servidor y build tool.
- Bootstrap 5.x.
- Sass/SCSS.
- GSAP en la descripcion de migracion a React.
- Arquitectura basada en componentes.
- La documentacion dice "React without jQuery"; el proyecto real usa React para la app, aunque conserva assets JS estaticos legacy en `public/assets/js`.
- Integracion de iconos FontAwesome/Line Awesome/Flaticon.
- Sliders/carousels para logos, servicios, testimonios y proyectos.

## Instalacion local

Entrar a la carpeta de la plantilla:

```powershell
cd Archinix
```

Instalar dependencias:

```powershell
npm install
```

Si aparece conflicto de dependencias:

```powershell
npm install --legacy-peer-deps
```

Levantar servidor de desarrollo:

```powershell
npm run dev
```

La documentacion indica que Vite abre en:

```text
http://localhost:5173
```

## Build local

Desde `Archinix`:

```powershell
npm run build
```

La documentacion dice que genera una carpeta de salida en la raiz del proyecto. En Vite normalmente esa carpeta es `dist`.

## Deploy

- La documentacion enlaza un video para Vercel: https://www.youtube.com/watch?v=7T4w0QJtL-o
- El proyecto ya incluye `Archinix/vercel.json` con rewrites hacia `/`, necesario para que las rutas de React Router funcionen al recargar paginas internas.

## Configuracion basica del sitio

### Titulo y favicon

- Titulo del navegador: editar `Archinix/index.html`.
- Favicon: reemplazar o cambiar la referencia a `Archinix/public/assets/img/favicon.png`.
- Titulos visibles de paginas internas: se editan en los componentes de pagina y/o `Breadcrumb`.

### Logos

Logos principales del proyecto:

- `Archinix/public/assets/img/logo/logo.png`
- `Archinix/public/assets/img/logo/logo-white.png`
- `Archinix/public/assets/img/logo/logo-2.png`

Uso principal:

- Header: `Archinix/src/layout/Header.tsx`.
- Footer: `Archinix/src/layout/FooterContent/FooterBrand.tsx`.
- Offcanvas lateral: `Archinix/src/layout/Header.tsx`.

### Menu

El menu principal se edita en:

```text
Archinix/src/jsondata/menuItem.json
```

Ese JSON alimenta:

```text
Archinix/src/layout/Header.tsx
Archinix/src/layout/HeaderContent/NavMenu.tsx
Archinix/src/layout/HeaderContent/SubMenu.tsx
```

### Footer

El footer se arma en:

```text
Archinix/src/layout/Footer.tsx
```

Partes editables:

- Marca y descripcion: `src/layout/FooterContent/FooterBrand.tsx`.
- Oficina, email, horarios y telefono: `src/layout/FooterContent/FooterOffice.tsx`.
- Links: `src/layout/FooterContent/FooterLinksSection.tsx`.
- Redes sociales: `src/layout/FooterContent/FooterSocial.tsx`.
- Copyright y legales: `src/layout/FooterContent/FooterBottom.tsx`.

## Contenido editable indicado por la documentacion

- Servicios: `src/jsondata/services.json`.
- Blog listado: `src/jsondata/blogData.json`.
- Detalle de blog: `src/jsondata/blogDetails.json`.
- Menu: `src/jsondata/menuItem.json`.
- Proceso: `src/jsondata/processSteps.json`.

Nota: la documentacion menciona `projectsSteps.json` para proyectos, pero en el proyecto real no existe ese archivo. Los proyectos parecen estar definidos directamente dentro de componentes de proyecto.

## Paginas de la plantilla

La documentacion menciona:

- Home.
- 16+ paginas internas.
- Project pages.
- Blog pages.
- Services pages.
- Teams pages.
- Paginas con imagen de fondo.

En el proyecto real las rutas estan definidas en `src/App.tsx`.

## Estilos, Sass, colores y tipografia

Entrada de estilos:

```text
Archinix/src/index.scss
```

Ese archivo importa Bootstrap, Line Awesome, Flaticon, Animate, Flaticon UIcons, estilos de Swiper y el paquete Sass local:

```text
Archinix/src/assets/scss/style.scss
```

Archivos importantes:

- Variables de color, fuente y breakpoints: `src/assets/scss/_variables.scss`.
- Estilos comunes y tipografia general: `src/assets/scss/_common.scss`.
- Header: `src/assets/scss/_header.scss`.
- Footer: `src/assets/scss/_footer.scss`.
- Modo oscuro: `src/assets/scss/_dark.scss`.
- Boton de tema: `src/assets/scss/_theme-toggle.scss`.
- Cada seccion tiene su parcial: `_about.scss`, `_services.scss`, `_project.scss`, `_blog.scss`, etc.

Colores base actuales:

```scss
$theme_color: #1d1e21;
$primary_color: #0a0a0a;
$secondary_color: #1b1e22;
$body_text: #868686;
$text_dark: #181818;
```

Fuente principal:

```scss
Space Grotesk
```

## Soporte

La documentacion pide contactar al autor en ThemeForest ante problemas:

```text
https://themeforest.net/user/thememarch
```

El texto de soporte no es consistente: una parte promete 24 horas y otra 15 horas de soporte en tiempo real.
