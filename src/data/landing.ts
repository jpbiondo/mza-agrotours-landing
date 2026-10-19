// Contenido de la landing en español e inglés. Arrancó del diseño "Landing v4"
// de Claude Design y desde ahí se edita acá. El español es el idioma por
// defecto (el que queda en el HTML) y el inglés lo aplica src/scripts/landing.ts
// al cambiar de idioma.

export interface Txt {
  es: string;
  en: string;
}

const t = (es: string, en: string): Txt => ({ es, en });

export const nav = [
  { id: "problema", label: t("Problema", "Problem") },
  { id: "solucion", label: t("Solución", "Solution") },
  { id: "modulos", label: t("Módulos", "Modules") },
  { id: "alcance", label: t("Alcance", "Scope") },
  { id: "tecnologia", label: t("Tecnología", "Technology") },
  { id: "equipo", label: t("Equipo", "Team") },
];

export type Perfil = "visitante" | "productor";

/** App de cada notificación: define el ícono y el color (ver Problem.astro). */
export type App = "instagram" | "whatsapp" | "banco" | "clima" | "telefono" | "notas";

/**
 * El problema contado por perfil: la pantalla de bloqueo del celular llena de
 * avisos de distintas apps, que llegan a la vez (no es una conversación). El
 * desenlace va aparte, en `resultado`. Son ejemplos verosímiles, no casos
 * reales. La solución, paso a paso, está en `comoFunciona`. `perfil` define
 * el color (ver lib/perfiles.ts).
 */
export const recorridos: {
  perfil: Perfil;
  nombre: Txt;
  hoy: Txt;
  hora: string;
  fecha: Txt;
  /** `contador`: mensajes sin leer de esa app. */
  notificaciones: { app: App; cuando: Txt; texto: Txt; contador?: number }[];
  resultado: Txt;
}[] = [
  {
    perfil: "visitante",
    nombre: t("Visitante", "Visitor"),
    hoy: t("Querés hacer una cosecha con tu familia el sábado.", "You want to join a harvest with your family on Saturday."),
    hora: "9:40",
    fecha: t("sábado 18 de octubre", "Saturday, October 18"),
    notificaciones: [
      { app: "instagram", cuando: t("hace 2 días", "2 days ago"), texto: t("finca.lujan: Sí, escribinos al WhatsApp", "finca.lujan: Yes, text us on WhatsApp") },
      { app: "whatsapp", cuando: t("jueves", "Thursday"), texto: t("Finca Luján: Te paso el CBU, mandame el comprobante", "Finca Luján: Here are the bank details, send me the receipt") },
      { app: "banco", cuando: t("jueves", "Thursday"), texto: t("Transferencia enviada: $24.000. Sin confirmación de la finca.", "Transfer sent: $24,000. No confirmation from the farm.") },
      { app: "clima", cuando: t("ahora", "now"), texto: t("Luján de Cuyo: 70% de probabilidad de lluvia hoy.", "Luján de Cuyo: 70% chance of rain today.") },
      { app: "whatsapp", cuando: t("ahora", "now"), texto: t("Vos: ¿Dónde queda exactamente? ¿Se suspende si llueve?", "You: Where exactly is it? Is it off if it rains?") },
    ],
    resultado: t(
      "Salís sin saber bien dónde es ni si la actividad se hace.",
      "You head out without knowing exactly where it is or whether it’s on.",
    ),
  },
  {
    perfil: "productor",
    nombre: t("Productor", "Producer"),
    hoy: t("Abrís la finca a visitas los fines de semana de cosecha.", "You open the farm to visitors on harvest weekends."),
    hora: "10:00",
    fecha: t("sábado 18 de octubre", "Saturday, October 18"),
    notificaciones: [
      { app: "instagram", cuando: t("23:10", "11:10 PM"), texto: t("Hola! ¿Hay lugar este finde?", "Hi! Any room this weekend?"), contador: 6 },
      { app: "whatsapp", cuando: t("ayer", "yesterday"), texto: t("Ya transferí, ¿me confirmás?", "I’ve sent the transfer, can you confirm?"), contador: 4 },
      { app: "telefono", cuando: t("9:12", "9:12 AM"), texto: t("3 llamadas perdidas mientras estabas en la viña", "3 missed calls while you were out in the vineyard") },
      { app: "banco", cuando: t("ayer", "yesterday"), texto: t("Recibiste $12.000. Concepto: “finde”", "You received $12,000. Reference: “weekend”") },
      { app: "notas", cuando: t("viernes", "Friday"), texto: t("Sáb: Gómez ×4, Ruiz ×2, ¿Paula? ×3", "Sat: Gómez ×4, Ruiz ×2, Paula? ×3") },
    ],
    resultado: t("Llegaron 14 personas para 12 lugares.", "14 people showed up for 12 spots."),
  },
];

/**
 * La solución, paso a paso y por perfil, con una captura por paso (ver
 * `captura` en `modulos`). El orden de los perfiles es el del selector.
 */
export const comoFunciona: {
  perfil: Perfil;
  nombre: Txt;
  pasos: { titulo: Txt; desc: Txt; pantalla: Txt; captura: string }[];
}[] = [
  {
    perfil: "visitante",
    nombre: t("Visitante", "Visitor"),
    pasos: [
      {
        titulo: t("Explorá", "Explore"),
        desc: t("Actividades de todas las fincas, con filtros por cultivo y departamento.", "Activities from every farm, filtered by crop and department."),
        pantalla: t("Explorar actividades", "Explore activities"),
        captura: "explorar-actividades",
      },
      {
        titulo: t("Reservá", "Book"),
        desc: t(
          "Elegís fecha y participantes, y la tarifa por edad se calcula al momento.",
          "Pick a date and participants, and age-based rates are worked out on the spot.",
        ),
        pantalla: t("Solicitar reserva", "Book an activity"),
        captura: "solicitar-reserva",
      },
      {
        titulo: t("Pagá", "Pay"),
        desc: t(
          "Con Mercado Pago. La reserva se confirma cuando entra el pago.",
          "With Mercado Pago. The booking is confirmed once the payment goes through.",
        ),
        pantalla: t("Pagar reserva", "Pay for the booking"),
        captura: "pagar-reserva",
      },
      {
        titulo: t("Llegá preparado", "Arrive prepared"),
        desc: t(
          "En tu reserva tenés la ubicación de la finca y el pronóstico del día.",
          "Your booking shows the farm’s location and the day’s forecast.",
        ),
        pantalla: t("Detalle de reserva", "Booking details"),
        captura: "detalle-de-reserva",
      },
    ],
  },
  {
    perfil: "productor",
    nombre: t("Productor", "Producer"),
    pasos: [
      {
        titulo: t("Publicá la actividad", "Publish the activity"),
        desc: t("Fotos, duración, qué incluye y tarifas por edad.", "Photos, duration, what’s included and age-based rates."),
        pantalla: t("Crear actividad", "Create activity"),
        captura: "crear-actividad-productor",
      },
      {
        titulo: t("Definí cupos por fecha", "Set capacity per date"),
        desc: t("No se venden más lugares de los que hay.", "No more spots are sold than there are."),
        pantalla: t("Calendario de actividad", "Activity calendar"),
        captura: "calendario-actividad-productor",
      },
      {
        titulo: t("Cobrá", "Get paid"),
        desc: t(
          "Con tu cuenta de Mercado Pago vinculada, las reservas llegan ya pagas.",
          "With your Mercado Pago account linked, bookings arrive already paid.",
        ),
        pantalla: t("Cobros", "Payouts"),
        captura: "cobro-productor",
      },
      {
        titulo: t("Respondé en un solo lugar", "Answer in one place"),
        desc: t("Chat por actividad, sin repartir mensajes entre apps.", "Chat per activity, no messages scattered across apps."),
        pantalla: t("Chats", "Chats"),
        captura: "chats-productor",
      },
    ],
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
      t("Catálogo con filtros por cultivo y departamento", "Catalog filtered by crop and department"),
      t("Catálogo de establecimientos", "Catalog of farms"),
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
    pantalla: t("Información de cultivo", "Crop information"),
    captura: "crop-information",
    foto: "modulo-cultivos", // racimos o frutales de estación
    titulo: t(
      "Conocé los cultivos detrás de cada experiencia",
      "Learn about the crops behind each experience",
    ),
    desc: t(
      "Catálogo de cultivos ofrecidos y las recetas que podés preparar con ellos.",
      "A catalog of the crops on offer and recipes you can make with them.",
    ),
    puntos: [
      t("Cultivos por actividad y temporada", "Crops per activity and season"),
      t("Los productores cargan y editan sus cultivos", "Producers add and edit their crops"),
      t("Recetas asociadas a los cultivos", "Recipes linked to each crop"),
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
      t("Manuales por perfil", "Guides per role"),
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

export const alcance = [
  {
    perfil: t("Visitantes", "Visitors"),
    tono: "success",
    icono: "backpack",
    items: [
      [t("Exploración", "Explore"), t("Catálogo filtrable y detalle de actividad con la ubicación de la finca.", "Filterable catalog and activity details with the farm’s location.")],
      [t("Reservas y pagos", "Bookings and payments"), t("Solicitud con cupos y tarifas por edad, pago online.", "Requests with capacity and age-based rates, online payment.")],
      [t("Mis reservas", "My bookings"), t("Reprogramación, cancelación y seguimiento de reembolsos.", "Rescheduling, cancellation and refund tracking.")],
      [t("Comunicación", "Messaging"), t("Chat con el establecimiento y preguntas frecuentes.", "Chat with the farm and FAQ.")],
    ],
  },
  {
    perfil: t("Productores", "Producers"),
    tono: "brown",
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

/** `github` es el usuario: de ahí salen el link al perfil y la foto (el avatar de GitHub). */
export const equipo = [
  { nombre: "Hsin Yu Lin", github: "hsinyulin03", rol: t("Líder de proyecto · Analista Funcional · Backend", "Project lead · Functional Analyst · Backend") },
  { nombre: "Juan Pablo Biondo", github: "jpbiondo", rol: t("Líder técnico · Analista Funcional · Frontend · UX/UI", "Functional Analyst · Tech lead · Frontend · UX/UI") },
  { nombre: "Leandro López", github: "L-LopezMartin", rol: t("Analista Funcional · Frontend  · UX/UI", "Functional Analyst · Frontend · UX/UI") },
  { nombre: "Lucila Oberti", github: "lucilaoberti", rol: t(" Analista Funcional · Backend ", "Functional Analyst · Backend") },
];
