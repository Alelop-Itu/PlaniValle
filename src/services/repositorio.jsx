// Planificaciones de ejemplo (después vendrán de Supabase)
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
  },
];

// Simula la espera de internet para ver el ActivityIndicator
const esperar = (milisegundos) => {
  return new Promise((resolver) => setTimeout(resolver, milisegundos));
};

// Devuelve todas las planificaciones del repositorio
export const obtenerPlanificaciones = async () => {
  await esperar(800);
  return planificacionesEjemplo; // luego: consulta a Supabase
};