import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import colores from '../styles/colores';
import TarjetaPlanificacion from '../componentes/TarjetaPlanificacion';
import { obtenerPlanificaciones } from '../services/repositorio';

const Repositorio = ({ navigation }) => {
  const [planificaciones, setPlanificaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Carga los datos al abrir la pantalla
  useEffect(() => {
    cargarPlanificaciones();
  }, []);

  const cargarPlanificaciones = async () => {
    try {
      const datos = await obtenerPlanificaciones();
      setPlanificaciones(datos);
    } catch (error) {
      console.log('Error al cargar planificaciones:', error);
    } finally {
      setCargando(false);
    }
  };

  // Mientras carga, solo mostramos el indicador
  if (cargando) {
    return (
      <View style={estilos.centrado}>
        <ActivityIndicator size="large" color={colores.coral} />
      </View>
    );
  }

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.contador}>{planificaciones.length} planificaciones</Text>

      <FlatList
        data={planificaciones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPlanificacion
            planificacion={item}
            // En el siguiente paso esto abrirá el detalle
            alPresionar={() => console.log('Tocaste:', item.titulo)}
          />
        )}
      />
    </View>
  );
};

export default Repositorio;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 16,
  },
  centrado: {
    flex: 1,
    backgroundColor: colores.fondo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contador: {
    fontSize: 14,
    color: colores.gris,
    marginBottom: 10,
  },
});