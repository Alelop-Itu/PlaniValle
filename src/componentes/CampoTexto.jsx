import { View, Text, TextInput, StyleSheet } from 'react-native';
import colores from '../styles/colores';


const CampoTexto = ({ etiqueta, valor, alCambiar, placeholder, esContrasena, teclado, multilinea }) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
      <TextInput
        style={[estilos.input, multilinea && estilos.inputMultilinea]}
        value={valor}
        onChangeText={alCambiar}
        placeholder={placeholder}
        placeholderTextColor={colores.gris}
        secureTextEntry={esContrasena}         
        keyboardType={teclado || 'default'}
        multiline={multilinea}               
        textAlignVertical="top"               
        autoCapitalize={teclado === 'email-address' ? 'none' : 'sentences'}
      />
    </View>
  );
};

export default CampoTexto;

const estilos = StyleSheet.create({
  contenedor: {
    width: '100%',
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colores.texto,
  },
  inputMultilinea: {
    minHeight: 160,
  },
});