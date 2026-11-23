import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colores from '../styles/colores';


const Buscador = ({ valor, alCambiar, placeholder }) => {
  return (
    <View style={estilos.contenedor}>
      <Ionicons name="search" size={20} color={colores.gris} />
      <TextInput
        style={estilos.input}
        value={valor}
        onChangeText={alCambiar}
        placeholder={placeholder}
        placeholderTextColor={colores.gris}
      />
      {}
      {valor !== '' && (
        <TouchableOpacity onPress={() => alCambiar('')}>
          <Ionicons name="close-circle" size={20} color={colores.gris} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Buscador;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.blanco,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
    fontSize: 16,
    color: colores.texto,
  },
});