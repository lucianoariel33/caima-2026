# Caima — Sitio web

Sitio del estudio (React + Vite + TypeScript). La app vive en la raíz del repositorio para deploy directo en Vercel.

## Desarrollo

```powershell
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Build

```powershell
npm run build
npm run preview
```

## Deploy en Vercel

- **Root Directory:** `.` (raíz del repo)
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

El archivo `vercel.json` ya incluye rewrites SPA para React Router.

### Formulario de contacto

El formulario envia las consultas a `info@caimarisarq.com.ar` usando la funcion `/api/contact`.
Para activarlo en Vercel, agregar estas variables de entorno:

- `RESEND_API_KEY`: API key privada de Resend.
- `RESEND_FROM_EMAIL`: remitente verificado, por ejemplo `Caimaris [arq] <web@caimarisarq.com.ar>`.
- `CONTACT_TO_EMAIL`: destino del formulario. Si se omite, usa `info@caimarisarq.com.ar`.

## Imágenes de estructura

```powershell
npm run setup:estructura
```

Ver `public/ESTRUCTURA/README.md`.

## Documentación

Material de referencia del template y notas del proyecto en `docs/`:

- `docs/documentacion.md`
- `docs/proyecto.md`
- `docs/HOME-SECCIONES.md`
- `docs/Archinix-Documentaion/`
