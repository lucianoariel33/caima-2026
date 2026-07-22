# Estado del proyecto Archinix

Contexto rapido para futuras sesiones sobre el sitio en `C:\Users\LX\Desktop\caima-2026`.

## Vista general

El workspace contiene una plantilla web React llamada Archinix, orientada a arquitectura e interiorismo.

Carpetas principales:

- Raiz del repo: aplicacion React (sitio web).
- `docs/Archinix-Documentaion`: documentacion original como sitio HTML.
- `docs/documentacion.md`: resumen operativo de la documentacion original.
- `docs/proyecto.md`: este mapa del estado del proyecto.
- `docs/HOME-SECCIONES.md`: mapa de secciones del home.

## Stack

- React 19.
- TypeScript.
- Vite 7 con `@vitejs/plugin-react-swc`.
- React Router DOM 7.
- Sass.
- Bootstrap 5.
- Swiper.
- GSAP instalado.
- Iconos: Line Awesome, Flaticon, Flaticon UIcons.

Scripts en `package.json`:

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Como correr

Desde la raiz del repo:

```powershell
npm install
npm run dev
```

URL esperada:

```text
http://localhost:5173
```

Build:

```powershell
npm run build
```

## Configuracion tecnica

Alias en `vite.config.ts` y `tsconfig.app.json`:

- `@` -> `src`
- `@assets` -> `src/assets`
- `@components` -> `src/components`
- `@hooks` -> `src/hooks`
- `@pages` -> `src/pages`

Deploy:

- `vercel.json` en la raiz reescribe todas las rutas a `/`, util para React Router en Vercel.

## Entrada de la app

- `src/main.tsx` monta React en `#root`, envuelve la app con `BrowserRouter` y `ThemeProvider`.
- `src/App.tsx` define rutas y muestra `Preloader` al cargar.
- `src/layout/Layout.tsx` arma la estructura global: `ThemeToggle`, `Header`, contenido (`Outlet`), `Footer` y `ScrollUpButton`.

## Rutas actuales

Definidas en `src/App.tsx`:

- `/` y `/home-one`: Home 1.
- `/home-two`: Home 2.
- `/home-three`: Home 3.
- `/about`
- `/services`
- `/teams`
- `/pricing`
- `/testimonial`
- `/process`
- `/faq`
- `/project-standard`
- `/project-metro`
- `/project-grid`
- `/project-list`
- `/project-masonry`
- `/project-slider`
- `/project-details/:id`
- `/blogs`
- `/blog-details/:id`
- `/contact`
- `/coming-soon`: por ahora renderiza `Home`.

## Home pages

`src/pages/Home.tsx`:

- HeroOne.
- StudioAbout.
- OurServices.
- FeatureLine.
- RecentProject.
- OurProcess.
- Testimonial.
- Cta.
- Counter.
- Blog.

`src/pages/HomeTwo.tsx`:

- HeroTwoSlider.
- MeetStudioAbout.
- ServicesSlide.
- FeatureSlider.
- ProjectTwo.
- ProcessSection.
- VideoSection.
- TeamsSection.
- OurClients.
- Cta.
- Blog.

`src/pages/HomeThree.tsx`:

- HeroThree.
- FeatureThree.
- AboutThree.
- Counter.
- ProjectThree.
- ProcessThree.
- AwardSection.
- PricingSection.
- Cta.
- Blog.

## Datos editables

Archivos JSON:

- `src/jsondata/menuItem.json`: menu principal.
- `src/jsondata/services.json`: servicios usados por `ServiceItem` y `ServicesSlide`.
- `src/jsondata/blogData.json`: listado de blogs.
- `src/jsondata/blogDetails.json`: detalle de blog.
- `src/jsondata/processSteps.json`: pasos del proceso usados por `OurProcess`.

Hay contenido hardcodeado dentro de muchos componentes. Para cambios de textos, revisar primero la pagina y sus componentes importados.

## Header

Archivo principal:

```text
src/layout/Header.tsx
```

Responsabilidades:

- Logo claro/oscuro.
- Menu desktop desde `menuItem.json`.
- Menu mobile.
- Offcanvas lateral.
- Estado sticky al hacer scroll.
- Cierre por overlay.
- Usa `useTheme` para elegir logo blanco en modo oscuro o en `/home-two` antes del sticky.

Logos:

- `/assets/img/logo/logo.png`
- `/assets/img/logo/logo-white.png`

Textos/contacto del menu mobile y offcanvas estan hardcodeados en `Header.tsx`.

## Footer

Archivo raiz:

```text
src/layout/Footer.tsx
```

Componentes:

- `FooterBrand.tsx`: logo y descripcion.
- `FooterOffice.tsx`: direccion, email, horario y telefono.
- `FooterLinksSection.tsx`: links.
- `FooterSocial.tsx`: redes sociales.
- `FooterBottom.tsx`: copyright y legales.

## Tema claro/oscuro

Archivos:

- `src/context/ThemeContext.tsx`
- `src/components/ThemeToggle/ThemeToggle.tsx`
- `src/assets/scss/_dark.scss`
- `src/assets/scss/_theme-toggle.scss`

Funcionamiento:

- Guarda `theme` en `localStorage`.
- Alterna entre `light` y `dark`.
- Aplica o quita la clase `dark` en `document.body`.

## Estilos

Entrada:

```text
src/index.scss
```

Parciales principales:

- `src/assets/scss/style.scss` importa todos los modulos.
- `_variables.scss`: fuente, colores y breakpoints.
- `_common.scss`: estilos comunes y tipografia.
- `_header.scss`, `_footer.scss`, `_hero-area.scss`, `_services.scss`, `_project.scss`, `_blog.scss`, etc.

Fuente principal actual: Space Grotesk importada desde Google Fonts en `_variables.scss`.

## Criterios de diseño vigentes

### Sistema tipografico global

Toda la web debe respetar un sistema tipografico unico. No puede haber dos planteos de texto distintos conviviendo para el mismo rol visual.

Roles permitidos en todo el sitio:

- Titulos: `h1` a `h6` y titulos visuales de seccion usan la familia de titulos (`$font-title`), peso 400 y `letter-spacing: 0`.
- Cuerpo editorial: parrafos y textos descriptivos usan la familia de cuerpo (`$font-body`), color secundario del contexto, tamano base 16/17px e interlineado cercano a `1.7`.
- Metadata: etiquetas, chips, categorias, botones chicos, labels y datos tecnicos usan la familia de cuerpo (`$font-body`), uppercase cuando corresponda, `letter-spacing: 0` y escala menor.
- Jerarquia por escala: puede cambiar el tamano segun el rol, pero no puede cambiar la familia/tone del mismo rol dentro de una misma pagina.
- No se crean estilos locales nuevos para texto si ya existe un rol equivalente. Primero revisar `src/assets/scss/_typography.scss`.
- `src/assets/scss/_typography.scss` debe importarse al final de `style.scss` para ordenar estilos legacy de secciones.

### Detalle de proyecto

La pagina de detalle de proyecto sigue el sistema global y agrega estas restricciones propias.

Roles permitidos:

- Titulo principal del hero: unica pieza de mayor escala en la pagina.
- Titulo de barra superior fija: referencia maxima para los textos internos; ningun titulo o texto de contenido debe superarlo.
- Titulos de seccion: `Ficha tecnica`, `Descripcion`, `Concepto`, `Resultado`, `Galeria` y `Mas proyectos` deben usar la misma tipografia de titulos, mismo color blanco, misma transformacion uppercase y mismo tamano base.
- Cuerpo editorial: textos de `Descripcion`, `Concepto` y `Resultado` deben compartir exactamente el mismo color, tamano, interlineado y espaciado entre parrafos.
- Metadata: datos de ficha tecnica y etiquetas/chips pueden tener un estilo propio, pero debe ser consistente entre todos los items del mismo grupo.

Reglas de layout vigentes:

- Hero de proyecto a pantalla completa: `100vh` / `100svh`.
- Barra fija de proyecto aparece solo al superar el hero, deslizando desde arriba.
- En la primera franja de contenido el orden desktop es: ficha tecnica izquierda, descripcion centro, foto derecha.
- La franja usa proporcion 30 / 40 / 30.
- La foto de esa franja no tiene padding ni margen interno; ocupa todo el alto y ancho disponible de su columna.
- Ficha tecnica y descripcion si tienen padding interno.
- El alto de la franja lo determina el contenido, no una altura minima arbitraria.

## Assets

Imagenes publicas en:

```text
public/assets/img
```

Subcarpetas principales:

- `about`
- `blog`
- `breadcrumb`
- `icon`
- `logo`
- `project`
- `service`
- `slider`
- `team`
- `testimonial`
- `timeline`

Los componentes importan muchas imagenes con rutas absolutas tipo:

```text
/assets/img/...
```

## Componentes principales

Carpetas en `src/components`:

- `About`
- `Accordions`
- `BackgroundImgSet`
- `Blog`
- `Breadcrumb`
- `Contact`
- `Counter`
- `CTA`
- `Faq`
- `Feature`
- `Hero`
- `HomeBlog`
- `OurClients`
- `Preloader`
- `Pricing`
- `Process`
- `Project`
- `ScrollUpButton`
- `SectionHeading`
- `Services`
- `TeamsSection`
- `Testimonial`
- `ThemeToggle`
- `VideoSection`

## Sliders y animaciones

Swiper aparece en:

- `components/Hero/HeroTwo.tsx`
- `components/Services/ServicesSlide.tsx`
- `components/OurClients/OurClients.tsx`
- `components/Testimonial/Testimonial.tsx`
- `components/Project/OurProcess/OurProcess.tsx`
- `components/Project/ProjectTwo.tsx`
- `components/Project/ProjectSliderItem/ProjectSliderItem.tsx`

Hay clases `wow fadeInUp` en varios componentes y assets de animacion legacy en `public/assets/js`, pero la app React no depende directamente de jQuery desde `src`.

## Observaciones importantes

- La documentacion original tiene errores de texto: menciona "Event & Conference", "One Home Pages", `projectsSteps.json` y rutas `sass`; el proyecto real usa arquitectura/interiorismo, tres homes, `processSteps.json` y `src/assets/scss`.
- `README.md` es el README generico de Vite, no documenta esta plantilla.
- `src/index.css` existe pero la app importa `src/index.scss`.
- `src/lib` existe como carpeta, pero no se vio contenido relevante en el listado inicial.
- Algunas secciones usan datos JSON; otras tienen arrays/textos internos en el componente.
- Para personalizar marca real, revisar textos hardcodeados en header, footer, heroes, contacto, testimonios, pricing y about.

## Primeros puntos a tocar para adaptar el sitio

1. Marca y favicon: `index.html`, `public/assets/img/favicon.png`, logos en `public/assets/img/logo`.
2. Menu: `src/jsondata/menuItem.json`.
3. Header/offcanvas/contactos: `src/layout/Header.tsx`.
4. Footer: `src/layout/FooterContent/*`.
5. Servicios/blog/proceso: JSON en `src/jsondata`.
6. Colores/fuente: `src/assets/scss/_variables.scss` y `src/assets/scss/_common.scss`.
7. Imagenes: reemplazar archivos en `public/assets/img` manteniendo nombres o actualizar rutas en componentes.
8. Rutas/paginas activas: `src/App.tsx`.
