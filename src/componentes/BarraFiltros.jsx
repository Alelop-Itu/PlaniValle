import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import colores from '../styles/colores';


const BarraFiltros = ({ titulo, opciones, seleccionado, alSeleccionar }) => {

  const todasLasOpciones = ['Todos', ...opciones];

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {todasLasOpciones.map((opcion) => (
          <TouchableOpacity
            key={opcion}
            style={[estilos.boton, opcion === seleccionado && estilos.botonActivo]}
            onPress={() => alSeleccionar(opcion)}
          >
            <Text style={estilos.textoBoton}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BarraFiltros;

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 6,
  },
  boton: {
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  botonActivo: {
    backgroundColor: colores.amarillo,
    borderColor: colores.amarillo,
  },
  textoBoton: {
    fontSize: 14,
    color: colores.texto,
  },
});