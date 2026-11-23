import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import colores from '../styles/colores';

// Botón redondeado
const BotonPrincipal = ({ texto, alPresionar, cargando, color }) => {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: color || colores.amarillo }]}
      onPress={alPresionar}
      disabled={cargando}
    >
      {cargando ? (
        <ActivityIndicator color={colores.texto} />
      ) : (
        <Text style={estilos.texto}>{texto}</Text>
      )}
    </TouchableOpacity>
  );
};

export default BotonPrincipal;

const estilos = StyleSheet.create({
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
  },
});