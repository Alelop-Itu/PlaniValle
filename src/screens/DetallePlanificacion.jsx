import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colores from '../styles/colores';
import Etiqueta from '../componentes/Etiqueta';
import BotonPrincipal from '../componentes/BotonPrincipal';

const DetallePlanificacion = ({ route }) => {
  const { planificacion } = route.params;

  const esPdf = planificacion.archivo.endsWith('.pdf');

  const usarComoBase = () => {
    Alert.alert('Usar como base', 'Opción pendiente hasta hacer el editor de planificación.');
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.titulo}>{planificacion.titulo}</Text>
      <Text style={estilos.anio}>Año lectivo {planificacion.anioLectivo}</Text>

      <View style={estilos.etiquetas}>
        <Etiqueta texto={`Semana ${planificacion.semana}`} color={colores.amarillo} />
        <Etiqueta texto={planificacion.aula} color={colores.verde} />
        <Etiqueta texto={planificacion.turno} color={colores.celeste} />
      </View>

      {/* Archivo original */}
      <Text style={estilos.seccion}>Archivo original</Text>
      <View style={[estilos.tarjeta, estilos.filaArchivo]}>
        <Ionicons
          name={esPdf ? 'document-text' : 'document'}
          size={36}
          color={esPdf ? colores.coral : colores.celeste}
        />
        <View style={estilos.infoArchivo}>
          <Text style={estilos.nombreArchivo}>{planificacion.archivo}</Text>
          <Text style={estilos.tipoArchivo}>{esPdf ? 'Documento PDF' : 'Documento de Word'}</Text>
        </View>
      </View>

      {}
      <Text style={estilos.seccion}>Contenido</Text>
      <View style={estilos.tarjeta}>
        {}
        <Text style={estilos.texto} selectable={true}>
          {planificacion.texto}
        </Text>
      </View>

      <BotonPrincipal texto="Usar como base" alPresionar={usarComoBase} color={colores.verde} />
    </ScrollView>
  );
};

export default DetallePlanificacion;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenido: {
    padding: 16,
    paddingBottom: 32,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colores.texto,
  },
  anio: {
    fontSize: 14,
    color: colores.gris,
    marginTop: 2,
  },
  etiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 20,
    marginBottom: 8,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 16,
  },
  filaArchivo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoArchivo: {
    flex: 1,
    marginLeft: 12,
  },
  nombreArchivo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
  },
  tipoArchivo: {
    fontSize: 13,
    color: colores.gris,
  },
  texto: {
    fontSize: 15,
    lineHeight: 22,
    color: colores.texto,
  },
});