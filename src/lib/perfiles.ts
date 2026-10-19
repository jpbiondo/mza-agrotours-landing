import type { Perfil } from "../data/landing";

// Color de cada perfil, igual en toda la página: verde el visitante, marrón el
// productor (la administración usa `info`, solo en Alcance). Las clases van
// completas para que Tailwind las encuentre.
export const colorPerfil: Record<
  Perfil,
  { pill: "success" | "brown"; boton: string; punto: string; numero: string; linea: string }
> = {
  visitante: {
    pill: "success",
    boton: "aria-pressed:bg-green-800",
    punto: "bg-green-800",
    numero: "bg-green-800",
    linea: "bg-green-800/25",
  },
  productor: {
    pill: "brown",
    boton: "aria-pressed:bg-brown-700",
    punto: "bg-brown-700",
    numero: "bg-brown-700",
    linea: "bg-brown-700/25",
  },
};
