// Contenido de la landing en español e inglés. Sale tal cual del diseño
// "Landing v4" de Claude Design; el español es el idioma por defecto (el que
// queda en el HTML) y el inglés lo aplica src/scripts/landing.ts al cambiar
// de idioma.

export interface Txt {
  es: string;
  en: string;
}

const t = (es: string, en: string): Txt => ({ es, en });

export const nav = [
  { id: "proyecto", label: t("El proyecto", "Project") },
  { id: "modulos", label: t("Módulos", "Modules") },
  { id: "temporadas", label: t("Temporadas", "Seasons") },
  { id: "alcance", label: t("Alcance", "Scope") },
  { id: "tecnologia", label: t("Tecnología", "Technology") },
  { id: "equipo", label: t("Equipo", "Team") },
];

export const comparacion = [
  {
    hoy: t(
      "Las experiencias están dispersas en redes y boca en boca; no hay un lugar donde ver qué ofrece cada finca.",
      "Experiences are scattered across social media and word of mouth; there’s no single place to see what each farm offers.",
    ),
    nosotros: t(
      "Catálogo único de actividades con filtros por tipo, zona y fecha, y un mapa de establecimientos.",
      "One activity catalog with filters by type, area and date, plus a map of farms.",
    ),
  },
  {
    hoy: t(
      "Las reservas se coordinan por mensaje, sin control de cupos y con riesgo de sobreventa.",
      "Bookings are arranged by message, with no capacity control and a risk of overbooking.",
    ),
    nosotros: t(
      "Reserva online con cupos por fecha y tarifas por rango etario, validadas en el momento.",
      "Online booking with per-date capacity and age-based rates, validated instantly.",
    ),
  },
  {
    hoy: t(
      "El cobro se arregla en el lugar o por transferencia, sin política de cancelación clara.",
      "Payment is settled on site or by transfer, with no clear cancellation policy.",
    ),
    nosotros: t(
      "Pago integrado, reprogramaciones, cancelaciones y reembolsos con reglas definidas.",
      "Integrated payments, rescheduling, cancellations and refunds with defined rules.",
    ),
  },
  {
    hoy: t(
      "La oferta no acompaña la temporada: se publica una cosecha cuando el cultivo todavía no está listo.",
      "Offers don’t follow the season: a harvest gets published before the crop is ready.",
    ),
    nosotros: t(
      "Gestión de cultivos y calendario de actividad para ofrecer cada experiencia en su momento.",
      "Crop management and an activity calendar so each experience is offered at the right time.",
    ),
  },
  {
    hoy: t(
      "Las consultas se pierden entre chats personales y nadie registra los problemas.",
      "Questions get lost in personal chats and nobody keeps track of problems.",
    ),
    nosotros: t(
      "Chat entre visitante y establecimiento, asistente virtual e incidencias con seguimiento.",
      "Visitor–farm chat, a virtual assistant and tracked issues.",
    ),
  },
  {
    hoy: t(
      "No hay forma de saber qué actividades funcionan ni cuánto generan.",
      "There’s no way to know which activities work or how much they earn.",
    ),
    nosotros: t(
      "Estadísticas de ocupación, ingresos y valoraciones por actividad.",
      "Statistics on occupancy, revenue and ratings per activity.",
    ),
  },
];

/**
 * `captura` es el nombre (sin extensión) de la captura de pantalla en
 * src/assets/capturas/; `foto`, el de la foto en src/assets/fotos/. Si el
 * archivo no está, la landing muestra un placeholder (captura) o la omite (foto).
 */
export const modulos = [
  {
    tab: t("Exploración", "Explore"),
    pantalla: t("Explorar actividades", "Explore activities"),
    captura: "explorar-actividades",
    foto: "modulo-exploracion", // visitantes recorriendo un viñedo
    titulo: t(
      "Encontrar qué hacer en el campo, sin buscar en cinco lugares",
      "Find things to do in the countryside without searching five places",
    ),
    desc: t(
      "El visitante recorre todas las actividades publicadas por las fincas de la provincia.",
      "Visitors browse every activity published by farms across the province.",
    ),
    puntos: [
      t("Catálogo con filtros por tipo, zona, fecha y precio", "Catalog filtered by type, area, date and price"),
      t("Mapa de establecimientos", "Map of farms"),
      t("Detalle con fotos, duración, cupos y reseñas", "Details with photos, duration, availability and reviews"),
    ],
  },
  {
    tab: t("Reservas", "Bookings"),
    pantalla: t("Solicitar reserva", "Book an activity"),
    captura: "solicitar-reserva",
    foto: "modulo-reservas", // grupo llegando a la finca
    titulo: t(
      "Reservar y pagar en pocos pasos, con cupos reales",
      "Book and pay in a few steps, with real availability",
    ),
    desc: t(
      "La reserva valida cupos y aplica la tarifa de cada participante.",
      "Each booking checks availability and applies the right rate per participant.",
    ),
    puntos: [
      t("Tarifas por rango etario", "Age-based pricing"),
      t("Pago online e historial de reservas", "Online payment and booking history"),
      t("Reprogramación, cancelación y reembolsos", "Rescheduling, cancellations and refunds"),
    ],
  },
  {
    tab: t("Actividades", "Activities"),
    pantalla: t("Calendario de actividad", "Activity calendar"),
    captura: "calendario-de-actividad",
    foto: "modulo-actividades", // productor guiando una cosecha
    titulo: t(
      "Cada jornada, con sus reservas y cupos a la vista",
      "Every day, with its bookings and capacity in view",
    ),
    desc: t(
      "Desde su panel, el establecimiento publica actividades y organiza el calendario.",
      "From their dashboard, farms publish activities and organize their calendar.",
    ),
    puntos: [
      t("Alta y edición de actividades con tarifas y cupos", "Create and edit activities with rates and capacity"),
      t("Calendario mensual y reservas del día", "Monthly calendar and daily bookings"),
      t("Cancelación de un día con aviso a los visitantes", "Cancel a day and notify visitors"),
    ],
  },
  {
    tab: t("Cultivos", "Crops"),
    pantalla: t("Gestión de cultivos", "Crop management"),
    captura: "gestion-de-cultivos",
    foto: "modulo-cultivos", // racimos o frutales de estación
    titulo: t(
      "Cada experiencia, en el momento justo de la temporada",
      "Every experience at the right moment of the season",
    ),
    desc: t(
      "El registro de cultivos conecta lo que pasa en la finca con lo que se ofrece.",
      "Crop records connect what happens on the farm with what is offered.",
    ),
    puntos: [
      t("Cultivos por establecimiento y temporada", "Crops per farm and season"),
      t("Edición y baja de cultivos", "Edit and remove crops"),
      t("Recetas asociadas a los productos", "Recipes linked to farm products"),
    ],
  },
  {
    tab: t("Comunicación", "Messaging"),
    pantalla: t("Chats", "Chats"),
    captura: "chats",
    foto: "modulo-comunicacion", // productora conversando con visitantes
    titulo: t("Las consultas en un solo lugar, con seguimiento", "Questions in one place, with follow-up"),
    desc: t(
      "Visitantes y fincas conversan dentro de la plataforma; los problemas quedan registrados.",
      "Visitors and farms talk inside the platform; issues are tracked.",
    ),
    puntos: [
      t("Chat visitante–establecimiento", "Visitor–farm chat"),
      t("Asistente virtual y manuales por perfil", "Virtual assistant and guides per role"),
      t("Incidencias con estado y respuesta", "Issues with status and response"),
    ],
  },
  {
    tab: t("Administración", "Admin"),
    pantalla: t("Panel del sistema", "System dashboard"),
    captura: "panel-del-sistema",
    foto: "modulo-administracion", // paisaje de fincas con la cordillera
    titulo: t("El equipo que mantiene la plataforma confiable", "The team that keeps the platform reliable"),
    desc: t(
      "Los administradores aprueban fincas, resuelven reclamos y configuran el sistema.",
      "Admins approve farms, resolve claims and configure the system.",
    ),
    puntos: [
      t("Aprobación de establecimientos", "Farm approval"),
      t("Incidencias, reembolsos y deudas", "Issues, refunds and balances"),
      t("Roles, parámetros y preguntas frecuentes", "Roles, settings and FAQ"),
    ],
  },
];

export const meses = {
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

/** Rangos de meses [desde, hasta], 1 = enero. Un rango que cruza el año se parte en dos. */
type Rango = [number, number];

export const cultivos: { nombre: Txt; cosecha: Rango[]; poda: Rango[] }[] = [
  { nombre: t("Vid · uva", "Grapevine"), cosecha: [[2, 4]], poda: [[6, 8]] },
  { nombre: t("Olivo", "Olive"), cosecha: [[4, 6]], poda: [[8, 9]] },
  { nombre: t("Durazno", "Peach"), cosecha: [[12, 12], [1, 3]], poda: [[6, 7]] },
  { nombre: t("Ciruela", "Plum"), cosecha: [[1, 3]], poda: [[6, 7]] },
  { nombre: t("Damasco", "Apricot"), cosecha: [[12, 12], [1, 1]], poda: [] },
  { nombre: t("Cereza", "Cherry"), cosecha: [[11, 12]], poda: [[7, 8]] },
  { nombre: t("Nogal · nuez", "Walnut"), cosecha: [[3, 4]], poda: [] },
  { nombre: t("Ajo", "Garlic"), cosecha: [[11, 12]], poda: [] },
  { nombre: t("Tomate", "Tomato"), cosecha: [[1, 4]], poda: [] },
];

export const alcance = [
  {
    perfil: t("Visitantes", "Visitors"),
    tono: "success",
    icono: "backpack",
    items: [
      [t("Registro y cuenta", "Sign-up and account"), t("Alta con datos personales, inicio de sesión y baja de cuenta.", "Sign-up with personal details, login and account deletion.")],
      [t("Exploración", "Explore"), t("Catálogo filtrable, detalle de actividad y mapa de fincas.", "Filterable catalog, activity details and farm map.")],
      [t("Reservas y pagos", "Bookings and payments"), t("Solicitud con cupos y tarifas por edad, pago online.", "Requests with capacity and age-based rates, online payment.")],
      [t("Mis reservas", "My bookings"), t("Reprogramación, cancelación y seguimiento de reembolsos.", "Rescheduling, cancellation and refund tracking.")],
      [t("Comunicación", "Messaging"), t("Chat con el establecimiento, asistente y preguntas frecuentes.", "Chat with the farm, assistant and FAQ.")],
    ],
  },
  {
    perfil: t("Productores", "Producers"),
    tono: "warning",
    icono: "tractor",
    items: [
      [t("Alta de establecimiento", "Farm registration"), t("Solicitud de alta e invitación de otros gestores.", "Registration request and inviting other managers.")],
      [t("Actividades", "Activities"), t("Creación, edición, reprogramación y cancelación por día.", "Create, edit, reschedule and cancel by day.")],
      [t("Calendario y reservas", "Calendar and bookings"), t("Reservas del día, cupos y reservas impagas.", "Daily bookings, capacity and unpaid bookings.")],
      [t("Cultivos y recetas", "Crops and recipes"), t("Cultivos por temporada y recetas de los productos de la finca.", "Crops by season and recipes for farm products.")],
      [t("Estadísticas", "Statistics"), t("Ocupación, ingresos y valoraciones.", "Occupancy, revenue and ratings.")],
    ],
  },
  {
    perfil: t("Administración", "Administration"),
    tono: "info",
    icono: "shield-check",
    items: [
      [t("Solicitudes", "Requests"), t("Aprobación de nuevos establecimientos.", "Approval of new farms.")],
      [t("Productores y deudas", "Producers and balances"), t("Gestión de productores y saldos pendientes.", "Producer management and outstanding balances.")],
      [t("Incidencias y reembolsos", "Issues and refunds"), t("Resolución de reclamos y devoluciones.", "Resolving claims and refunds.")],
      [t("Roles y permisos", "Roles and permissions"), t("Administradores del sistema y sus roles.", "System administrators and their roles.")],
      [t("Parámetros", "Settings"), t("Rangos etarios, preguntas frecuentes y configuración general.", "Age ranges, FAQ and general settings.")],
    ],
  },
] as const;

export const stack: { capa: Txt; items: { nombre: Txt; tipo: Txt; desc: Txt; chips?: string[] }[] }[] = [
  {
    capa: t("Aplicación", "Application"),
    items: [
      {
        nombre: t("Aplicación web", "Web app"),
        tipo: t("Frontend", "Frontend"),
        desc: t(
          "Interfaz para visitantes, productores y administradores, con renderizado del lado del servidor.",
          "Interface for visitors, producers and admins, with server-side rendering.",
        ),
        // El diseño decía Next.js 15; la app usa Next.js 16.
        chips: ["Next.js 16", "React 19", "Tailwind CSS v4", "ShadCN"],
      },
    ],
  },
  {
    capa: t("Servicio", "Service"),
    items: [
      {
        nombre: t("API REST", "API REST"),
        tipo: t("Backend", "Backend"),
        desc: t(
          "Lógica de negocio, reservas transaccionales y control de acceso por roles.",
          "Business logic, transactional bookings and role-based access control.",
        ),
        chips: ["Java 17", "Spring Boot 3.5", "Spring Security"],
      },
    ],
  },
  {
    capa: t("Datos", "Data"),
    items: [
      { nombre: t("PostgreSQL 16", "PostgreSQL 16"), tipo: t("Relacional", "Relational"), desc: t("Usuarios, establecimientos, actividades, reservas y pagos.", "Users, farms, activities, bookings and payments.") },
      { nombre: t("Redis 7", "Redis 7"), tipo: t("Caché", "Cache"), desc: t("Respuestas rápidas para consultas frecuentes.", "Fast responses for frequent queries.") },
      { nombre: t("Amazon S3", "Amazon S3"), tipo: t("Archivos", "Files"), desc: t("Fotos de actividades y establecimientos.", "Photos of activities and farms.") },
    ],
  },
  {
    capa: t("Integraciones", "Integrations"),
    items: [
      { nombre: t("Mercado Pago", "Mercado Pago"), tipo: t("Pagos", "Payments"), desc: t("Pasarela de pago de las reservas.", "Payment gateway for bookings.") },
      { nombre: t("Firebase", "Firebase"), tipo: t("Acceso", "Auth"), desc: t("Autenticación y mensajería.", "Authentication and messaging.") },
      { nombre: t("OpenWeather", "OpenWeather"), tipo: t("Clima", "Weather"), desc: t("Pronóstico para el día de la actividad.", "Forecast for the activity day.") },
      { nombre: t("Google Maps", "Google Maps"), tipo: t("Mapas", "Maps"), desc: t("Ubicación de los establecimientos.", "Farm locations.") },
      { nombre: t("Amazon SES", "Amazon SES"), tipo: t("Correo", "Email"), desc: t("Confirmaciones y avisos por correo electrónico.", "Confirmations and notifications by email.") },
    ],
  },
  {
    capa: t("Infraestructura", "Infrastructure"),
    items: [
      { nombre: t("Contenedores", "Containers"), tipo: t("Docker", "Docker"), desc: t("Mismo entorno en desarrollo y producción.", "Same environment in development and production."), chips: ["Docker", "Docker Compose"] },
      { nombre: t("Integración continua", "Continuous integration"), tipo: t("CI", "CI"), desc: t("Build y pruebas en cada cambio.", "Build and tests on every change."), chips: ["GitHub Actions"] },
      { nombre: t("Hosting", "Hosting"), tipo: t("AWS", "AWS"), desc: t("Servidor de aplicación y base de datos administrada.", "Application server and managed database."), chips: ["Amazon EC2", "Amazon RDS"] },
    ],
  },
];

/** `foto` es el nombre (sin extensión) de la foto en src/assets/equipo/; si falta, se muestran las iniciales. */
export const equipo = [
  { nombre: "Hsin Yu Lin", foto: "lin", rol: t("Líder de proyecto · Backend", "Project lead · Backend") },
  { nombre: "Juan Pablo Biondo", foto: "biondo", rol: t("Líder técnico · Frontend · UX/UI", "Tech lead · Frontend · UX/UI") },
  { nombre: "Leandro López", foto: "lopez", rol: t("Frontend · UX/UI", "Frontend · UX/UI") },
  { nombre: "Lucila Oberti", foto: "oberti", rol: t("Backend", "Backend") },
];
