import { View, Text, StyleSheet } from 'react-native';
import colores from '../styles/colores';


const EnConstruccion = ({ titulo, color }) => {
  return (
    <View style={estilos.contenedor}>
      {}
      <View style={[estilos.circulo, { backgroundColor: color }]} />
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.texto}>En construcción 🛠️</Text>
    </View>
  );
};

export default EnConstruccion;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colores.texto,
  },
  texto: {
    fontSize: 16,
    color: colores.gris,
    marginTop: 6,
  },
});