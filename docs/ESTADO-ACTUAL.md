# Estado actual del proyecto

Fecha de cierre: 2026-07-23.

Este documento deja el estado practico del sitio para retomar la proxima sesion sin perder contexto.

## Resumen

El sitio es una app React + Vite para CAIMA/CAD arquitectura, basada en la plantilla Archinix. En esta etapa el foco estuvo en hacer la version mobile funcional: contenido legible, margenes respetados, navegacion clara y primeras vistas con imagen protagonista.

Estado general: el proyecto compila correctamente con `npm run build`.

## Cambios importantes ya aplicados

### Mobile funcional

- Se agrego una capa de estilos mobile en `src/assets/scss/_mobile-functional.scss`.
- Esa capa esta importada desde `src/assets/scss/style.scss`.
- En celular, el layout se fuerza a una lectura mas lineal y segura.
- Se redujeron efectos, transiciones y comportamientos que complicaban la lectura.
- Se reforzaron margenes laterales con `--mobile-edge: 18px`.
- Se corrigieron casos donde elementos quedaban pegados al borde o generaban scroll horizontal.

### Textos en desplegables

- Se agrego `src/components/MobileInfoDisclosure/MobileInfoDisclosure.tsx`.
- En mobile, bloques largos de texto quedan ocultos en desplegables.
- Esto aplica en home y secciones informativas generales.
- No se aplico a la grilla de proyectos ni al detalle individual de proyectos, por pedido explicito.

### Home mobile

- La imagen destacada del hero ocupa el 100% del alto visible del celular.
- En la primera vista mobile se muestra solo el titulo sobre la foto.
- El slogan/resumen queda oculto en mobile.
- Al scrollear, el resto del contenido sigue con el orden normal.

### Detalle individual de proyecto

- El hero del detalle de cada proyecto ocupa el 100% del alto visible del celular.
- En la primera vista mobile se muestra solo el titulo sobre la imagen.
- Categoria y datos rapidos del proyecto quedan ocultos en esa primera vista mobile.
- El resto del detalle, ficha, descripcion, galeria y proyectos relacionados queda debajo al scrollear.

### Footer mobile

- El footer mobile fue simplificado.
- Se ocultaron bloques demasiado largos o detallados.
- Quedan marca/logo, email, links importantes y redes.
- Las redes quedan como iconos.

### Navegacion y scroll

- Se reforzo `src/hooks/useScrollRestoration.ts`.
- Cada cambio de ruta interna vuelve al tope de la pantalla.
- Esto corrige el problema de entrar a un proyecto y aparecer a mitad de pagina.
- Tambien cubre clicks internos desde menu, footer o tarjetas.

## Rutas principales activas

Definidas en `src/App.tsx`:

- `/`
- `/about`
- `/services`
- `/project-standard`
- `/project-details/:id`
- `/contact`

Hay rutas legacy comentadas en `src/App.tsx`; no asumir que estan activas.

## Archivos clave para retomar

- `src/assets/scss/_mobile-functional.scss`: capa principal de correcciones mobile.
- `src/assets/scss/style.scss`: entrada de parciales SCSS.
- `src/components/MobileInfoDisclosure/MobileInfoDisclosure.tsx`: componente de desplegable mobile.
- `src/components/Hero/HeroTwo.tsx`: hero del home actual.
- `src/components/Project/ProjectDetailsWrapper/ProjectDetailsWrapper.tsx`: detalle individual de proyecto.
- `src/hooks/useScrollRestoration.ts`: comportamiento global de scroll al navegar.
- `src/content/useContent.ts`: contenido fijo del sitio.
- `src/content/projects.ts`: datos de proyectos.

## Validaciones realizadas

- `npm run build` pasa correctamente.
- Se verifico mobile a 390 x 844:
  - Home: hero de alto completo y solo titulo visible.
  - Detalle de proyecto `honorio-pueyrredon-15`: hero de alto completo y solo titulo visible.
  - No se detecto scroll horizontal en las rutas revisadas.
  - Los margenes laterales de contenido visible en mobile quedaron respetados.

## Advertencias conocidas

Durante el build aparecen advertencias por referencias CSS legacy a imagenes:

- `assets/img/project/project-1-1.jpg`
- `assets/img/project/project-1-2.jpg`
- `assets/img/project/project-1-3.jpg`
- `assets/img/project/project-1-4.jpg`
- `assets/img/project/project-1-5.jpg`
- `assets/img/project/project-1-6.jpg`

El build no falla por esto. Las advertencias vienen de estilos heredados de la plantilla y quedan para revisar si se quiere limpiar el CSS legacy.

## Pendientes recomendados

- Probar en un celular real, no solo viewport de navegador.
- Revisar visualmente todos los proyectos individuales, porque cada imagen tiene encuadres distintos.
- Decidir si se limpian rutas legacy comentadas y componentes no usados.
- Revisar textos finales de `src/content/useContent.ts`.
- Revisar si hace falta ajustar encuadres mobile de imagenes proyecto por proyecto.
- Limpiar advertencias de imagenes legacy si se busca un build sin ruido.

## Estado de trabajo

Al cierre queda al menos este archivo modificado:

- `src/hooks/useScrollRestoration.ts`

Puede haber cambios previos ya incorporados en el estado actual del repo. Antes de seguir, conviene ejecutar:

```powershell
git status --short
npm run build
```
