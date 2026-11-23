import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colores from '../styles/colores';

const Login = ({ navigation }) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>PlaniValle</Text>

      {}
      <TouchableOpacity
        style={estilos.boton}
        onPress={() => navigation.replace('Principal')}
      >
        <Text style={estilos.textoBoton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 32,
  },
  boton: {
    backgroundColor: colores.amarillo,
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 16,
  },
  textoBoton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
  },
});