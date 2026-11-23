
export const turnos = ['Matutino', 'Vespertino'];
export const aulas = ['Inicial 1', 'Inicial 2'];

// Planificaciones de ejemplo 
const planificacionesEjemplo = [
  {
    id: 1,
    titulo: 'Los colores primarios',
    archivo: 'colores_primarios.pdf',
    texto: 'Lunes: canción de los colores. Martes: pintura con dedos en rojo...',
    anioLectivo: '2025-2026',
    semana: 3,
    turno: 'Matutino',
    aula: 'Inicial 1',
    subidaPorId: 1,
    subidaPor: 'Docente de prueba',
  },
  {
    id: 2,
    titulo: 'Mi familia',
    archivo: 'mi_familia.docx',
    texto: 'Lunes: conversación sobre quiénes viven en casa. Martes: dibujo familiar...',
    anioLectivo: '2025-2026',
    semana: 5,
    turno: 'Vespertino',
    aula: 'Inicial 2',
    subidaPorId: 2,
    subidaPor: 'María Pérez',
  },
  {
    id: 3,
    titulo: 'Los animales de la granja',
    archivo: 'granja.pdf',
    texto: 'Lunes: sonidos de animales. Miércoles: manualidad de la vaca...',
    anioLectivo: '2025-2026',
    semana: 8,
    turno: 'Matutino',
    aula: 'Inicial 2',
    subidaPorId: 2,
    subidaPor: 'María Pérez',
  },
  {
    id: 4,
    titulo: 'Las figuras geométricas',
    archivo: 'figuras.pdf',
    texto: 'Lunes: búsqueda de círculos en el aula. Jueves: collage de figuras...',
    anioLectivo: '2026-2027',
    semana: 2,
    turno: 'Matutino',
    aula: 'Inicial 1',
    subidaPorId: 1,
    subidaPor: 'Docente de prueba',
  },
  {
    id: 5,
    titulo: 'Los medios de transporte',
    archivo: 'transporte.docx',
    texto: 'Martes: canción del bus. Viernes: carrito con cajas recicladas...',
    anioLectivo: '2026-2027',
    semana: 4,
    turno: 'Vespertino',
    aula: 'Inicial 1',
    subidaPorId: 3,
    subidaPor: 'Ana Torres',
  },
  {
    id: 6,
    titulo: 'Cuidemos el agua',
    archivo: 'agua.pdf',
    texto: 'Lunes: cuento de la gotita. Miércoles: experimento flota o se hunde...',
    anioLectivo: '2026-2027',
    semana: 6,
    turno: 'Matutino',
    aula: 'Inicial 2',
    subidaPorId: 3,
    subidaPor: 'Ana Torres',
  },
];


let siguienteId = 7;


const esperar = (milisegundos) => {
  return new Promise((resolver) => setTimeout(resolver, milisegundos));
};


export const obtenerPlanificaciones = async () => {
  await esperar(500);
  return [...planificacionesEjemplo]; 
};


export const subirPlanificacion = async (nueva) => {
  await esperar(800);
  planificacionesEjemplo.push({ ...nueva, id: siguienteId });
  siguienteId = siguienteId + 1;
};