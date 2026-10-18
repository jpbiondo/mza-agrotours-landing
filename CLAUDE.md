# Mendoza AgroTours — Landing

Landing pública de Mendoza AgroTours. Se deploya sola en Vercel: es estática, sin Firebase, sin backend y sin variables de entorno.

La app completa (Next.js + Firebase + backend Spring) vive en el repo hermano `../mza-agrotours-frontend` y por ahora no va a producción.

## Stack

- Astro (salida estática) + Tailwind CSS v4 (`@tailwindcss/vite`) + TypeScript estricto.
- Fuentes self-hosted con Fontsource: Bitter (display), IBM Plex Sans (texto), IBM Plex Mono.
- `npm run dev` / `npm run build` / `npm run preview`.

## Diseño

- Fuente de verdad: Claude Design, archivo `Landing v4.html` del proyecto
  `https://claude.ai/design/p/b9bf5625-e73e-4f35-bfc4-cd2e7a8acde6`. No inventar el diseño.
- Tiene que ser responsive (mobile first).
- Si el diseño tiene bugs de UI evidentes (p. ej. un botón verde relleno cuyo texto se vuelve verde en hover), se corrigen.

## Estética compartida con la app

Se copia desde `../mza-agrotours-frontend`, no se importa (no hay dependencia entre repos):

- Tokens del `@theme` de `src/app/globals.css` → [src/styles/global.css](src/styles/global.css).
- Logo `public/logo-pano.svg` (el que usa la app en el header) y `favicon.ico`.

## Convenciones

- Comentarios y textos de UI en español rioplatense.
- Estilos siempre con utilidades de Tailwind y los tokens del `@theme`; nada de estilos inline.
- Commits chicos y descriptivos a medida que se avanza.
