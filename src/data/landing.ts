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
  { id: "como-funciona", label: t("Cómo funciona", "How it works") },
  { id: "alcance", label: t("Alcance", "Scope") },
  { id: "tecnologia", label: t("Tecnología", "Technology") },
  { id: "equipo", label: t("Equipo", "Team") },
];

/**
 * El problema contado por perfil: cómo se resuelve hoy (mensajes sueltos) y
 * cómo con la plataforma (pasos). Los mensajes son ejemplos verosímiles, no
 * citas reales. `perfil` define el color (ver Proyecto.astro).
 */
export const recorridos: {
  perfil: "visitante" | "productor";
  nombre: Txt;
  hoy: Txt;
  /** `respuesta`: mensaje del otro lado (se alinea a la derecha). `alerta`: cómo termina mal. */
  mensajes: { canal: Txt; texto: Txt; respuesta?: boolean; alerta?: boolean }[];
  con: Txt;
  pasos: { titulo: Txt; desc: Txt; via: Txt }[];
}[] = [
  {
    perfil: "visitante",
    nombre: t("Visitante", "Visitor"),
    hoy: t("Querés hacer una cosecha con tu familia el sábado.", "You want to join a harvest with your family on Saturday."),
    mensajes: [
      { canal: t("Instagram", "Instagram"), texto: t("Vi el post de una finca en Luján. ¿Hacen visitas?", "Saw a post from a farm in Luján. Do you take visitors?") },
      { canal: t("WhatsApp · 2 días después", "WhatsApp · 2 days later"), texto: t("Sí, escribinos al WhatsApp", "Yes, text us on WhatsApp"), respuesta: true },
      { canal: t("WhatsApp", "WhatsApp"), texto: t("¿Tienen lugar el sábado para 2 adultos y 2 chicos? ¿Cuánto sale?", "Any room on Saturday for 2 adults and 2 kids? How much is it?") },
      { canal: t("WhatsApp", "WhatsApp"), texto: t("Te paso el CBU, mandame el comprobante", "Here are the bank details, send me the receipt"), respuesta: true },
      { canal: t("Sábado, 9:40", "Saturday, 9:40"), texto: t("¿Dónde queda exactamente? Y si llueve, ¿se suspende?", "Where exactly is it? And if it rains, is it called off?"), alerta: true },
    ],
    con: t("Lo mismo, en un solo lugar y sin esperar respuesta.", "The same, in one place and without waiting for a reply."),
    pasos: [
      { titulo: t("Encontrás la actividad", "Find the activity"), desc: t("Filtrás por tipo, zona y fecha.", "Filter by type, area and date."), via: t("Catálogo y mapa", "Catalog and map") },
      { titulo: t("Ves cupos y precio al instante", "See availability and price instantly"), desc: t("Tarifas por rango de edad y cupos por fecha.", "Age-based rates and per-date capacity."), via: t("Reserva online", "Online booking") },
      { titulo: t("Pagás", "Pay"), desc: t("La reserva se confirma sola cuando entra el pago.", "The booking confirms itself once the payment goes through."), via: t("Mercado Pago", "Mercado Pago") },
      { titulo: t("Llegás preparado", "Arrive prepared"), desc: t("Confirmación por correo, ubicación y pronóstico del día.", "Email confirmation, location and the day’s forecast."), via: t("Correo, mapa y clima", "Email, map and weather") },
    ],
  },
  {
    perfil: "productor",
    nombre: t("Productor", "Producer"),
    hoy: t("Abrís la finca a visitas los fines de semana de cosecha.", "You open the farm to visitors on harvest weekends."),
    mensajes: [
      { canal: t("Instagram · 23:10", "Instagram · 23:10"), texto: t("Hola! ¿Hay lugar este finde?", "Hi! Any room this weekend?") },
      { canal: t("Cuaderno", "Notebook"), texto: t("Sáb: Gómez ×4, Ruiz ×2, ¿Paula? ×3", "Sat: Gómez ×4, Ruiz ×2, Paula? ×3"), respuesta: true },
      { canal: t("WhatsApp", "WhatsApp"), texto: t("Ya transferí, ¿me confirmás?", "I’ve sent the transfer, can you confirm?") },
      { canal: t("Llamadas perdidas", "Missed calls"), texto: t("3 llamadas mientras estabas en la viña", "3 calls while you were out in the vineyard"), respuesta: true },
      { canal: t("Sábado, 10:00", "Saturday, 10:00"), texto: t("Llegaron 14 personas para un cupo de 12", "14 people showed up for 12 spots"), alerta: true },
    ],
    con: t("Las reservas llegan ordenadas y ya pagas.", "Bookings arrive organized and already paid."),
    pasos: [
      { titulo: t("Publicás la actividad", "Publish the activity"), desc: t("Fotos, duración, qué incluye y tarifas por edad.", "Photos, duration, what’s included and age-based rates."), via: t("Panel del establecimiento", "Farm dashboard") },
      { titulo: t("Definís cupos por fecha", "Set capacity per date"), desc: t("No se venden más lugares de los que hay.", "No more spots are sold than there are."), via: t("Calendario de actividad", "Activity calendar") },
      { titulo: t("Cobrás", "Get paid"), desc: t("Con tu cuenta de Mercado Pago vinculada.", "Through your linked Mercado Pago account."), via: t("Mercado Pago", "Mercado Pago") },
      { titulo: t("Respondés en un solo lugar", "Answer in one place"), desc: t("Chat por actividad, sin repartir mensajes entre apps.", "Chat per activity, no messages scattered across apps."), via: t("Chats", "Chats") },
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
  { nombre: "Hsin Yu Lin", github: "hsinyulin03", rol: t("Líder de proyecto · Backend", "Project lead · Backend") },
  { nombre: "Juan Pablo Biondo", github: "jpbiondo", rol: t("Líder técnico · Frontend · UX/UI", "Tech lead · Frontend · UX/UI") },
  { nombre: "Leandro López", github: "L-LopezMartin", rol: t("Frontend · UX/UI", "Frontend · UX/UI") },
  { nombre: "Lucila Oberti", github: "lucilaoberti", rol: t("Backend", "Backend") },
];
