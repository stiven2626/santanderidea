// ─────────────────────────────────────────────────────────────
//  Todo el contenido de la web vive aquí. Edítalo sin miedo.
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre: 'IDEA',
  apellido: 'Santander',
  sigla: ['Ingeniería', 'Desarrollo', 'Estrategia', 'Automatización'],
  dominio: 'ideasantander.com',
  email: 'hola@ideasantander.com', // créalo gratis en Cloudflare → Email Routing
  whatsapp: '573103558222', // 57 + número, sin espacios ni +
  ciudad: 'Bucaramanga, Santander',
  instagram: 'https://instagram.com/', // ← tu usuario cuando lo crees
  linkedin: 'https://www.linkedin.com/in/yeison-stiven-6972a258',
}

export const fundador = {
  nombre: 'Yeison Stiven Gutiérrez Rozo',
  cargo: 'Fundador · Director de tecnología',
  bio: 'Ingeniero de software en formación y tecnólogo del SENA. Ha construido pipelines de datos e integraciones para el sector público nacional, y software a la medida para empresas comerciales, de logística y de servicios en Santander.',
  portafolio: 'https://', // ← link a tu portafolio personal
}

// Categorías para filtrar servicios
export const categorias = ['Todos', 'Construir', 'Automatizar', 'Crecer']

export const servicios = [
  {
    cat: 'Construir',
    icono: 'web',
    titulo: 'Páginas web y landing pages',
    texto: 'Sitios rápidos, que cargan bien en el celular y aparecen en Google. Para vender, no solo para "estar".',
  },
  {
    cat: 'Construir',
    icono: 'app',
    titulo: 'Software a la medida',
    texto: 'Inventarios, pedidos, turnos, cartera, comisiones. Si hoy vive en un Excel, puede vivir en una app hecha para tu negocio.',
  },
  {
    cat: 'Construir',
    icono: 'movil',
    titulo: 'Apps móviles',
    texto: 'Aplicaciones para Android y iPhone para tus clientes o para tu equipo en campo.',
  },
  {
    cat: 'Construir',
    icono: 'tienda',
    titulo: 'Tiendas en línea',
    texto: 'Catálogo, carrito y pagos con PSE, tarjetas y Nequi. Conectada a tu inventario real.',
  },
  {
    cat: 'Automatizar',
    icono: 'engranaje',
    titulo: 'Automatización de procesos',
    texto: 'Reportes que se generan solos, correos que se envían solos, datos que se pasan solos de un sistema a otro.',
  },
  {
    cat: 'Automatizar',
    icono: 'chat',
    titulo: 'Chatbots e inteligencia artificial',
    texto: 'Asistentes que responden a tus clientes, clasifican solicitudes o leen documentos por ti.',
    nuevo: true,
  },
  {
    cat: 'Automatizar',
    icono: 'api',
    titulo: 'Integraciones y APIs',
    texto: 'Hacemos que tu CRM, tu facturación, tu tienda y tus hojas de cálculo hablen entre sí.',
  },
  {
    cat: 'Automatizar',
    icono: 'factura',
    titulo: 'Facturación electrónica',
    texto: 'Conectamos tu sistema con tu proveedor de facturación para cumplir con la DIAN sin digitar dos veces.',
  },
  {
    cat: 'Crecer',
    icono: 'tablero',
    titulo: 'Tableros y reportes',
    texto: 'Tus ventas, gastos e indicadores en una sola pantalla, actualizados sin que nadie tenga que armarlos.',
  },
  {
    cat: 'Crecer',
    icono: 'datos',
    titulo: 'Ingeniería de datos',
    texto: 'Ordenamos, limpiamos y centralizamos tu información para que puedas tomar decisiones con ella.',
  },
  {
    cat: 'Crecer',
    icono: 'nube',
    titulo: 'Nube y servidores',
    texto: 'Publicamos, migramos y cuidamos tus aplicaciones en la nube: copias de seguridad incluidas.',
  },
  {
    cat: 'Crecer',
    icono: 'soporte',
    titulo: 'Soporte y mantenimiento',
    texto: '¿Tienes un sistema que nadie entiende y nadie quiere tocar? Lo revisamos, lo arreglamos y lo mantenemos.',
  },
]

export const proceso = [
  {
    nombre: 'Bosquejo',
    duracion: '30 min · sin costo',
    texto: 'Nos cuentas tu idea o tu problema, como te salga. No necesitas saber de tecnología.',
  },
  {
    nombre: 'Plano',
    duracion: '2 a 5 días',
    texto: 'Te enviamos una propuesta clara: qué vamos a construir, cuánto cuesta y cuándo está listo. Precio cerrado.',
  },
  {
    nombre: 'Obra',
    duracion: 'según el proyecto',
    texto: 'Construimos por etapas y cada semana ves avances reales funcionando, no promesas.',
  },
  {
    nombre: 'Entrega',
    duracion: 'y después',
    texto: 'Lo publicamos, capacitamos a tu equipo y seguimos ahí para ajustes y soporte.',
  },
]

// Compromisos (en lugar de cifras infladas)
export const compromisos = [
  ['Precio cerrado', 'Sabes cuánto pagas antes de empezar.'],
  ['Avances semanales', 'Ves el software crecer, no solo un informe.'],
  ['El código es tuyo', 'Al terminar, todo queda a tu nombre.'],
  ['Respuesta en 24 h', 'Por WhatsApp o correo, de lunes a sábado.'],
]

// Sectores en los que el equipo ya tiene experiencia real
export const sectores = [
  ['Sector público', 'Integraciones con X-Road y flujos de datos institucionales.'],
  ['Comercial y ventas', 'Control de pagos, comisiones y sincronización con CRM.'],
  ['Logística y dotación', 'Inventarios, herramientas y fechas de entrega.'],
  ['Educación', 'Gestión de apoyos socioeconómicos para estudiantes.'],
  ['Eventos', 'Agendamiento, migración y análisis de datos.'],
]

export const mision =
  'Ayudar a las empresas de Santander y de Colombia a trabajar mejor con tecnología hecha a su medida: software claro, honesto en precio y tiempos, que resuelve problemas reales en lugar de crear nuevos.'

export const vision =
  'Ser el aliado tecnológico de referencia para las pequeñas y medianas empresas del oriente colombiano, reconocido por convertir ideas sencillas en sistemas que hacen crecer negocios, y por formar talento local en el camino.'

export const valores = [
  ['Claridad', 'Hablamos en español, no en tecnicismos.'],
  ['Honestidad', 'Si algo no te conviene, te lo decimos, aunque no lo vendamos.'],
  ['Oficio', 'Hacemos las cosas bien aunque nadie vaya a mirar el código.'],
  ['Aprendizaje', 'Cada proyecto nuevo es una oportunidad de aprender algo nuevo.'],
]

export const preguntas = [
  [
    '¿Cuánto cuesta un proyecto?',
    'Depende de lo que necesites. Una landing page y un sistema de inventarios son mundos distintos. Por eso la primera conversación es gratis: después te enviamos un precio cerrado, sin sorpresas.',
  ],
  [
    'No sé exactamente qué necesito, ¿igual puedo escribirles?',
    'Claro. La mayoría de clientes llegan con un problema ("pierdo pedidos", "el reporte me toma un día entero"), no con una solución. Encontrarla es parte de nuestro trabajo.',
  ],
  [
    '¿Trabajan solo en Bucaramanga?',
    'Estamos en Bucaramanga, pero trabajamos de forma remota con empresas de toda Colombia.',
  ],
  [
    '¿Qué pasa cuando termina el proyecto?',
    'Te entregamos el código, los accesos y una capacitación. Si quieres, seguimos con un plan de soporte mensual; si no, eres libre de llevarlo a donde quieras.',
  ],
]
