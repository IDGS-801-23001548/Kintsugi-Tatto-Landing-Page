export const navigation = [
  ['El estudio', '#estudio'], ['Servicios', '#servicios'], ['Proceso', '#proceso'],
  ['La app', '#app'], ['Visítanos', '#visitanos'],
] as const

export const services = [
  { name: 'Valoración y diseño', description: 'Platicamos tu idea, revisamos la zona y preparamos un boceto antes de agendar.' },
  { name: 'Tatuaje personalizado', description: 'Una pieza diseñada desde cero a partir de tu historia y tus referencias.' },
  { name: 'Línea fina', description: 'Trazos delicados y piezas pequeñas con acabado limpio.' },
  { name: 'Realismo', description: 'Retratos y escenas en negro y gris o a color, con detalle fotográfico.' },
  { name: 'Lettering', description: 'Frases, nombres y fechas con la tipografía que mejor te represente.' },
  { name: 'Cover up', description: 'Cubrimos o transformamos un tatuaje anterior con un diseño nuevo.' },
  { name: 'Retoque', description: 'Reavivamos trabajos hechos en el estudio para que luzcan como el primer día.' },
]

export const steps = [
  { name: 'Valoración', description: 'Nos cuentas tu idea, vemos la zona y resolvemos tus dudas.' },
  { name: 'Diseño', description: 'Preparamos un boceto y lo ajustamos contigo hasta que sea tuyo.' },
  { name: 'Sesión', description: 'Agendas con tu especialista y tatuamos con material estéril.' },
  { name: 'Cuidado', description: 'Recibes indicaciones y seguimos tu cicatrización desde la app.' },
]

export const questions = [
  { question: '¿Cómo agendo mi primera cita?', answer: 'Descarga la app, crea tu cuenta y solicita una valoración. El estudio confirma la fecha, la hora y el especialista según la disponibilidad.' },
  { question: '¿Puedo cambiar o cancelar mi cita?', answer: 'Sí. Desde la app envías una solicitud de cambio o de cancelación. Tu cita sigue igual hasta que el estudio la revisa y te responde.' },
  { question: '¿Cómo compro productos de cuidado?', answer: 'En la tienda de la app eliges los productos y envías tu solicitud. Los pagas y recoges en el estudio; la app no te pide datos de tarjeta.' },
  { question: '¿Qué pasa después de tatuarme?', answer: 'Tu especialista registra indicaciones de cuidado y da seguimiento a tu cicatrización. Consúltalas cuando quieras desde la app.' },
  { question: '¿Quién puede ver mi información?', answer: 'Solo tú y el personal del estudio. Al crear tu cuenta aceptas nuestro aviso de privacidad, que explica cómo usamos tus datos.' },
]

export const features = [
  { name: 'Tus citas', description: 'Consulta tus próximas citas y pide cambios o cancelaciones.' },
  { name: 'Mensajes con el estudio', description: 'Escríbenos directo desde la app, sin redes sociales.' },
  { name: 'Tienda de cuidado', description: 'Aparta productos y recógelos en el estudio.' },
  { name: 'Seguimiento', description: 'Indicaciones de tu especialista después de cada sesión.' },
  { name: 'Historial', description: 'Tus servicios y compras, siempre a la mano.' },
  { name: 'Datos protegidos', description: 'Solo tú y el estudio ven tu información.' },
]

export const principles = [
  { name: 'Diseño a tu medida', description: 'Cada pieza parte de una valoración y un boceto que ajustamos contigo.' },
  { name: 'Higiene sin concesiones', description: 'Material desechable y estéril en cada sesión.' },
  { name: 'Te acompañamos después', description: 'Indicaciones y seguimiento de tu cicatrización desde la app.' },
]

export const artists = [
  { name: 'Valeria Ponce', specialty: 'Botánica y línea fina' },
  { name: 'Mateo Salcedo', specialty: 'Realismo en negro y gris' },
  { name: 'Lucía Cárdenas', specialty: 'Color y cover up' },
]

export const studioDetails = {
  address: 'Calle Áurea 108, Centro, León, Guanajuato',
  hours: 'Lunes a viernes, 11:00–20:00 · Sábado, 10:00–16:00',
  phone: '+52 477 555 0148',
  mapLabel: 'Calle Áurea · Centro de León',
}
