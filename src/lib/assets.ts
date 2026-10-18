import type { ImageMetadata } from "astro";

// Fotos y capturas se buscan por nombre de archivo (sin extensión). Así, para
// sumar o cambiar una imagen alcanza con soltarla en la carpeta: si todavía no
// está, el componente que la usa muestra un placeholder o la omite.

type Modulos = Record<string, { default: ImageMetadata }>;

const capturas = import.meta.glob<{ default: ImageMetadata }>("../assets/capturas/*.{png,jpg,jpeg,webp}", { eager: true });
const fotos = import.meta.glob<{ default: ImageMetadata }>("../assets/fotos/*.{png,jpg,jpeg,webp}", { eager: true });

function buscar(modulos: Modulos, nombre: string): ImageMetadata | undefined {
  const entrada = Object.entries(modulos).find(([ruta]) => ruta.replace(/^.*\//, "").replace(/\.\w+$/, "") === nombre);
  return entrada?.[1].default;
}

export const captura = (nombre: string) => buscar(capturas, nombre);
export const foto = (nombre: string) => buscar(fotos, nombre);
