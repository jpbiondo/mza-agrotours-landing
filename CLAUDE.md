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

## Estructura

- [src/data/landing.ts](src/data/landing.ts): todos los textos, en `{ es, en }`.
- `src/components/sections/`: una sección por archivo; `src/components/ui/`: piezas chicas (Button, Pill, T…).
- [src/scripts/landing.ts](src/scripts/landing.ts): idioma ES/EN (intercambia `data-en`), pestañas de módulos, mes actual, aparición al scroll, link activo y menú mobile.
- Breakpoints propios: `desk:` (1000px) y `nav:` (1100px), definidos en rem en `@theme`.

## Imágenes

Se buscan por nombre de archivo (sin extensión), en png/jpg/webp. Si falta, se muestra un placeholder:

- `src/assets/fotos/hero.*`: foto del hero (cosecha de uva, hora dorada). Las fotos `modulo-*.*` se muestran bajo cada módulo solo si existen.
- `src/assets/capturas/*.*`: capturas a 1280px de ancho de las pantallas del prototipo (`explorar-actividades`, `solicitar-reserva`, `calendario-de-actividad`, `gestion-de-cultivos`, `chats`, `panel-del-sistema`). Reemplazan a los iframes del diseño.
- Equipo: la foto es el avatar de GitHub de cada uno (`github.com/<usuario>.png`), cargado en vivo; el usuario está en `equipo` de data/landing.ts.

## Estética compartida con la app

Se copia desde `../mza-agrotours-frontend`, no se importa (no hay dependencia entre repos):

- Tokens del `@theme` de `src/app/globals.css` → [src/styles/global.css](src/styles/global.css).
- Logo `public/logo-pano.svg` (el que usa la app en el header) y `favicon.ico`.

## Convenciones

- Comentarios y textos de UI en español rioplatense.
- Estilos siempre con utilidades de Tailwind y los tokens del `@theme`; nada de estilos inline.
- Commits chicos y descriptivos a medida que se avanza.
