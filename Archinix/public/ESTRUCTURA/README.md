# Imagenes de estructura central

Esta carpeta contiene las imagenes fijas de la web.

```text
Archinix/public/ESTRUCTURA
```

Los proyectos dinamicos van aparte en:

```text
Archinix/PROYECTOS
Archinix/public/media/proyectos
```

## Convencion de nombres

Todas las fotos usan el formato:

```text
nombre-uso_ANCHOxALTO.jpg
```

El tamaño en el nombre es el **tamano exacto** que debe tener la imagen de reemplazo.

Ejemplo: `breadcrumb_about_1920x480.jpg` → exportar una imagen de **1920 × 480 px**.

Para regenerar todas desde el slider del hero:

```bash
npm run setup:estructura
```

Eso recorta fotos del slider al tamano de cada slot y actualiza las rutas en el codigo.

---

## Paginas activas (Home, About, Services, Proyectos, Contact)

| Uso | Archivo | Tamano |
|---|---|---|
| Offcanvas lateral | `layout_offcanvas_1315x902.jpg` | 1315 × 902 |
| Franja feature (home) | `feature_fondo_1920x683.jpg` | 1920 × 683 |
| CTA principal (home) | `cta_principal_1900x760.jpg` | 1900 × 760 |
| Breadcrumb Nosotros | `breadcrumb_about_1920x480.jpg` | 1920 × 480 |
| About — Nuestro estudio | `seccion_about_page_1100x893.jpg` | 1100 × 893 |
| About — Enfoque | `seccion_about_01_1000x1000.jpg` | 1000 × 1000 |
| About — Video fondo | `video_fondo_1920x1080.jpg` | 1920 × 1080 |
| Breadcrumb Servicios | `breadcrumb_servicios_1920x480.jpg` | 1920 × 480 |
| Testimonial 1–3 | `seccion_testimonial_01_500x603.jpg` … `03_500x634.jpg` | 500 × 603 / 634 |
| Breadcrumb Proyectos | `breadcrumb_proyectos_1920x480.jpg` | 1920 × 480 |
| Breadcrumb Contacto | `breadcrumb_contact_1920x480.jpg` | 1920 × 480 |

## Slider hero (home)

Ruta: `Archinix/public/media/slider/`

| Archivo | Tamano |
|---|---|
| `slide-01_1920x1080.jpg` … `slide-10_1920x1080.jpg` | 1920 × 1080 |

---

## Secciones del template (rutas ocultas)

| Uso | Archivo | Tamano |
|---|---|---|
| Hero Home 1 | `hero_home_01_1920x1100.jpg` | 1920 × 1100 |
| Hero Home 3 | `hero_home_03_800x1000.jpg` | 800 × 1000 |
| Slider legacy | `sliderprincipal_01_1920x1080.jpg` … `03` | 1920 × 1080 |
| CTA pricing / contacto | `cta_pricing_1900x760.jpg`, `cta_contacto_1900x760.jpg` | 1900 × 760 |
| FAQ | `faq_imagen_1920x902.jpg` | 1920 × 902 |
| Process | `process_imagen_890x664.jpg` | 890 × 664 |
| Services fondo | `services_fondo_1920x683.jpg` | 1920 × 683 |
| Team fondo | `team_fondo_1920x1080.jpg` | 1920 × 1080 |
| Breadcrumbs blog, FAQ, pricing, process, equipo, testimonios | `breadcrumb_*_1920x480.jpg` | 1920 × 480 |
| Servicios 1–6 | `seccion_servicio_01_738x1024.jpg` … `06` | 738 × 1024 |
| Timeline 1–5 | `seccion_timeline_01_850x570.jpg` … `05` | 850 × 570 |
| Equipo 1–6 | `seccion_equipo_01_800x900.jpg` … `06` | 800 × 900 |
| Clientes 1–4 | `seccion_cliente_01_120x120.jpg` … `04` | 120 × 120 |

## Iconos y logos (sin cambiar)

| Uso | Archivo |
|---|---|
| Favicon | `favicon.png` |
| Logos | `logo_principal.png`, `logo_blanco.png`, `logo_alternativo.png` |
| Iconos UI | `icono_*.png` |

---

## Como reemplazar una imagen

1. Prepará la foto al **mismo tamano** que indica el nombre del archivo.
2. Entrá a `Archinix/public/ESTRUCTURA` (o `public/media/slider` para slides).
3. Reemplazá el archivo manteniendo **exactamente** el mismo nombre.
4. Recargá la web.

No cambies el nombre ni el tamano en el filename si no queres tocar codigo.
