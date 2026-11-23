import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import colores from '../styles/colores';
import CampoTexto from '../componentes/CampoTexto';
import BarraFiltros from '../componentes/BarraFiltros';
import BotonPrincipal from '../componentes/BotonPrincipal';
import { subirPlanificacion, turnos, aulas } from '../services/repositorio';
import { usuariaActual } from '../services/sesion';

// Tipos de archivo permitidos: PDF y Word
const tiposPermitidos = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const SubirPlanificacion = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [anioLectivo, setAnioLectivo] = useState('2026-2027');
  const [semana, setSemana] = useState('');
  const [turno, setTurno] = useState('Matutino');
  const [aula, setAula] = useState('Inicial 1');
  const [texto, setTexto] = useState('');
  const [archivo, setArchivo] = useState(null); 
  const [guardando, setGuardando] = useState(false);
  const [mensajeError, setMensajeError] = useState('');


  const elegirArchivo = async () => {
    try {
      const resultado = await DocumentPicker.getDocumentAsync({
        type: tiposPermitidos,
        copyToCacheDirectory: true,
      });

      if (resultado.canceled) {
        return; 
      }

      setArchivo(resultado.assets[0]);
    } catch (error) {
      console.log('Error al elegir archivo:', error);
    }
  };

  const guardar = async () => {
    if (titulo.trim() === '' || anioLectivo.trim() === '' || semana === '' || archivo === null) {
      setMensajeError('Completa el título, año lectivo, semana y archivo');
      return;
    }

    const numeroSemana = Number(semana);
    if (isNaN(numeroSemana) || numeroSemana < 1) {
      setMensajeError('La semana debe ser un número mayor a 0');
      return;
    }

    setGuardando(true);
    setMensajeError('');

    try {
      await subirPlanificacion({
        titulo: titulo.trim(),
        archivo: archivo.name,
        archivoUri: archivo.uri,
        texto: texto,
        anioLectivo: anioLectivo.trim(),
        semana: numeroSemana,
        turno: turno,
        aula: aula,
        subidaPorId: usuariaActual.id,
        subidaPor: usuariaActual.nombre,
      });

      Alert.alert('¡Listo!', 'La planificación se subió al repositorio');
      navigation.goBack(); 
    } catch (error) {
      setMensajeError('No se pudo guardar. Intenta de nuevo');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <CampoTexto
        etiqueta="Título"
        valor={titulo}
        alCambiar={setTitulo}
        placeholder="Ej: Los animales del mar"
      />

      {}
      <View style={estilos.fila}>
        <View style={estilos.mitad}>
          <CampoTexto
            etiqueta="Año lectivo"
            valor={anioLectivo}
            alCambiar={setAnioLectivo}
            placeholder="2026-2027"
          />
        </View>
        <View style={estilos.mitad}>
          <CampoTexto
            etiqueta="Semana"
            valor={semana}
            alCambiar={setSemana}
            placeholder="Ej: 7"
            teclado="numeric"
          />
        </View>
      </View>

      <BarraFiltros titulo="Turno" opciones={turnos} seleccionado={turno} alSeleccionar={setTurno} sinTodos={true} />
      <BarraFiltros titulo="Aula" opciones={aulas} seleccionado={aula} alSeleccionar={setAula} sinTodos={true} />

      {/* Archivo original */}
      <Text style={estilos.etiqueta}>Archivo original</Text>
      <TouchableOpacity style={estilos.cajaArchivo} onPress={elegirArchivo}>
        <Ionicons
          name={archivo ? 'document-attach' : 'cloud-upload'}
          size={30}
          color={archivo ? colores.coral : colores.gris}
        />
        <Text style={estilos.textoArchivo}>
          {archivo ? archivo.name : 'Toca para elegir un PDF o Word'}
        </Text>
      </TouchableOpacity>

      <CampoTexto
        etiqueta="Texto de la planificación"
        valor={texto}
        alCambiar={setTexto}
        placeholder="Pega aquí el contenido de la planificación..."
        multilinea={true}
      />

      {mensajeError !== '' && <Text style={estilos.error}>{mensajeError}</Text>}

      <BotonPrincipal texto="Subir planificación" alPresionar={guardar} cargando={guardando} />
    </ScrollView>
  );
};

export default SubirPlanificacion;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenido: {
    padding: 16,
    paddingBottom: 40,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mitad: {
    width: '48%',
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 6,
    marginBottom: 6,
  },
  cajaArchivo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.blanco,
    borderWidth: 2,
    borderColor: colores.borde,
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  textoArchivo: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: colores.texto,
  },
  error: {
    color: colores.coral,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
});