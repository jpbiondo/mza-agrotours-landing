// Interacción de la landing: idioma, pestañas de módulos, recorrido del
// problema por perfil, aparición al hacer scroll, link activo de la navbar y
// menú mobile. Todo opera sobre HTML ya renderizado por Astro.

type Lang = "es" | "en";
const CLAVE_IDIOMA = "mat-landing-lang";

/* ---- Idioma ------------------------------------------------------------ */

// El español queda en el HTML; se guarda la primera vez para poder volver.
const traducibles = [...document.querySelectorAll<HTMLElement>("[data-en]")];
const traduciblesHtml = [...document.querySelectorAll<HTMLElement>("[data-en-html]")];
traducibles.forEach((el) => (el.dataset.es = el.textContent ?? ""));
traduciblesHtml.forEach((el) => (el.dataset.esHtml = el.innerHTML));

function leerIdioma(): Lang {
  try {
    return localStorage.getItem(CLAVE_IDIOMA) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function aplicarIdioma(lang: Lang) {
  document.documentElement.lang = lang === "en" ? "en" : "es-AR";
  traducibles.forEach((el) => (el.textContent = (lang === "en" ? el.dataset.en : el.dataset.es) ?? ""));
  // Strings propios del sitio (data/landing.ts), no contenido de usuarios.
  traduciblesHtml.forEach((el) => (el.innerHTML = (lang === "en" ? el.dataset.enHtml : el.dataset.esHtml) ?? ""));
  document.querySelectorAll<HTMLButtonElement>("[data-lang]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  try {
    localStorage.setItem(CLAVE_IDIOMA, lang);
  } catch {
    // Sin storage (modo privado, cookies bloqueadas): el idioma no se recuerda.
  }
}

document.querySelectorAll<HTMLButtonElement>("[data-lang]").forEach((b) => {
  b.addEventListener("click", () => aplicarIdioma(b.dataset.lang as Lang));
});
if (leerIdioma() === "en") aplicarIdioma("en");

/* ---- Pestañas de módulos ----------------------------------------------- */

const tablist = document.querySelector<HTMLElement>("[data-tabs]");
if (tablist) {
  const tabs = [...tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panel = (tab: HTMLButtonElement) => document.getElementById(tab.getAttribute("aria-controls") ?? "");
  let actual = 0;
  let timer: number | undefined;

  function mostrar(i: number, foco = false) {
    if (i === actual) return;
    const anterior = panel(tabs[actual]);
    const siguiente = panel(tabs[i]);
    tabs.forEach((t, j) => {
      t.setAttribute("aria-selected", String(j === i));
      t.tabIndex = j === i ? 0 : -1;
    });
    if (foco) tabs[i].focus();
    actual = i;
    window.clearTimeout(timer);

    // Fundido corto, como en el diseño: sale el panel actual y entra el nuevo.
    const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!anterior || !siguiente || reducido) {
      tabs.forEach((t) => {
        const p = panel(t);
        if (p) p.hidden = p !== siguiente;
      });
      return;
    }
    anterior.dataset.fade = "";
    timer = window.setTimeout(() => {
      tabs.forEach((t) => {
        const p = panel(t);
        if (p && p !== siguiente) {
          p.hidden = true;
          delete p.dataset.fade;
        }
      });
      siguiente.dataset.fade = "";
      siguiente.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => delete siguiente.dataset.fade));
    }, 180);
  }

  tabs.forEach((t, i) => t.addEventListener("click", () => mostrar(i)));
  tablist.addEventListener("keydown", (e) => {
    const paso = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (paso) mostrar((actual + paso + tabs.length) % tabs.length, true);
    if (e.key === "Home") mostrar(0, true);
    if (e.key === "End") mostrar(tabs.length - 1, true);
  });
}

/* ---- Aparición al hacer scroll ------------------------------------------ */

// Cada elemento aparece una sola vez. Al aparecer uno, también se dan por
// vistos todos los que quedaron por encima: si se entra a mitad de página
// (link a una sección, recarga con scroll guardado), al subir el contenido ya
// está cargado en vez de animarse de nuevo.
const pendientes = new Set(document.querySelectorAll<HTMLElement>(".reveal"));

function revelar(el: HTMLElement) {
  el.dataset.in = "";
  pendientes.delete(el);
  aparicion.unobserve(el);
}

const aparicion = new IntersectionObserver(
  (entradas) => {
    if (!entradas.some((e) => e.isIntersecting)) return;
    entradas.forEach((e) => e.isIntersecting && revelar(e.target as HTMLElement));
    pendientes.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) revelar(el);
    });
  },
  { threshold: 0.1 },
);
pendientes.forEach((el) => aparicion.observe(el));

/* ---- Link activo de la navbar ------------------------------------------ */

const secciones = [...document.querySelectorAll<HTMLElement>("main section[id]")];
const links = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav]")];

function marcarLinkActivo() {
  let id = "";
  secciones.forEach((s) => {
    if (s.getBoundingClientRect().top < 120) id = s.id;
  });
  links.forEach((a) => {
    if (a.dataset.nav === id) a.dataset.on = "";
    else delete a.dataset.on;
  });
}
addEventListener("scroll", marcarLinkActivo, { passive: true });
marcarLinkActivo();

/* ---- Menú mobile -------------------------------------------------------- */

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-movil");
if (menuBtn && menu) {
  const abrir = (abierto: boolean) => {
    menuBtn.setAttribute("aria-expanded", String(abierto));
    menuBtn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("hidden", !abierto);
  };
  menuBtn.addEventListener("click", () => abrir(menuBtn.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => abrir(false)));
  addEventListener("keydown", (e) => e.key === "Escape" && abrir(false));
}
