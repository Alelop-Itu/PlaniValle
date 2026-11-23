import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colores from '../styles/colores';
import Etiqueta from './Etiqueta';

// Tarjeta blanca con el resumen de una planificación
const TarjetaPlanificacion = ({ planificacion, alPresionar }) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={alPresionar}>
      <View style={estilos.fila}>
        <Ionicons name="document-text" size={28} color={colores.coral} />
        <View style={estilos.info}>
          <Text style={estilos.titulo}>{planificacion.titulo}</Text>
          <Text style={estilos.anio}>Año lectivo {planificacion.anioLectivo}</Text>
        </View>
      </View>

      {/* Fila de etiquetas */}
      <View style={estilos.etiquetas}>
        <Etiqueta texto={`Semana ${planificacion.semana}`} color={colores.amarillo} />
        <Etiqueta texto={planificacion.aula} color={colores.verde} />
        <Etiqueta texto={planificacion.turno} color={colores.celeste} />
      </View>
    </TouchableOpacity>
  );
};

export default TarjetaPlanificacion;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colores.texto,
  },
  anio: {
    fontSize: 13,
    color: colores.gris,
    marginTop: 2,
  },
  etiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
});