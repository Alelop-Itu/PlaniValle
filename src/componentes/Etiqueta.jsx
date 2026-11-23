import { View, Text, StyleSheet } from 'react-native';
import colores from '../styles/colores';

// Pastilla pequeña de color con texto (semana, aula, turno, tipo...)
const Etiqueta = ({ texto, color }) => {
  return (
    <View style={[estilos.etiqueta, { backgroundColor: color || colores.celeste }]}>
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
};

export default Etiqueta;

const estilos = StyleSheet.create({
  etiqueta: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginTop: 6,
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.texto,
  },
});