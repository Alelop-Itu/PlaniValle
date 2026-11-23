import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colores from '../styles/colores';
import TarjetaPlanificacion from '../componentes/TarjetaPlanificacion';
import Buscador from '../componentes/Buscador';
import BarraFiltros from '../componentes/BarraFiltros';
import { obtenerPlanificaciones } from '../services/repositorio';


const quitarRepetidos = (lista) => {
  return lista.filter((valor, posicion) => lista.indexOf(valor) === posicion);
};

const Repositorio = ({ navigation }) => {
  const [planificaciones, setPlanificaciones] = useState([]);
  const [cargando, setCargando] = useState(true);


  const [busqueda, setBusqueda] = useState('');
  const [anio, setAnio] = useState('Todos');
  const [semana, setSemana] = useState('Todos');
  const [turno, setTurno] = useState('Todos');
  const [aula, setAula] = useState('Todos');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

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

  const limpiarFiltros = () => {
    setAnio('Todos');
    setSemana('Todos');
    setTurno('Todos');
    setAula('Todos');
  };


  const anios = quitarRepetidos(planificaciones.map((p) => p.anioLectivo));
  const semanas = quitarRepetidos(planificaciones.map((p) => p.semana)).sort((a, b) => a - b);
  const turnos = ['Matutino', 'Vespertino'];
  const aulas = ['Inicial 1', 'Inicial 2'];


  const filtrosActivos = [anio, semana, turno, aula].filter((f) => f !== 'Todos').length;


  const planificacionesFiltradas = planificaciones.filter((p) => {
    const coincideTexto = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideAnio = anio === 'Todos' || p.anioLectivo === anio;
    const coincideSemana = semana === 'Todos' || p.semana === semana;
    const coincideTurno = turno === 'Todos' || p.turno === turno;
    const coincideAula = aula === 'Todos' || p.aula === aula;
    return coincideTexto && coincideAnio && coincideSemana && coincideTurno && coincideAula;
  });

  if (cargando) {
    return (
      <View style={estilos.centrado}>
        <ActivityIndicator size="large" color={colores.coral} />
      </View>
    );
  }

  return (
    <View style={estilos.contenedor}>
      {}
      <View style={estilos.filaBusqueda}>
        <Buscador valor={busqueda} alCambiar={setBusqueda} placeholder="Buscar por título" />
        <TouchableOpacity
          style={[estilos.botonFiltros, filtrosActivos > 0 && estilos.botonFiltrosActivo]}
          onPress={() => setMostrarFiltros(!mostrarFiltros)}
        >
          <Ionicons name="options" size={22} color={colores.texto} />
          {filtrosActivos > 0 && <Text style={estilos.numeroFiltros}>{filtrosActivos}</Text>}
        </TouchableOpacity>
      </View>

      {}
      {mostrarFiltros && (
        <View style={estilos.panelFiltros}>
          <BarraFiltros titulo="Año lectivo" opciones={anios} seleccionado={anio} alSeleccionar={setAnio} />
          <BarraFiltros titulo="Semana" opciones={semanas} seleccionado={semana} alSeleccionar={setSemana} />
          <BarraFiltros titulo="Turno" opciones={turnos} seleccionado={turno} alSeleccionar={setTurno} />
          <BarraFiltros titulo="Aula" opciones={aulas} seleccionado={aula} alSeleccionar={setAula} />

          <TouchableOpacity onPress={limpiarFiltros}>
            <Text style={estilos.limpiar}>Limpiar filtros</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={estilos.contador}>
        {planificacionesFiltradas.length} de {planificaciones.length} planificaciones
      </Text>

      <FlatList
        data={planificacionesFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPlanificacion
            planificacion={item}
       
            alPresionar={() => console.log('Tocaste:', item.titulo)}
          />
        )}
        // 
        ListEmptyComponent={
          <Text style={estilos.vacio}>No hay planificaciones con esos filtros 🔍</Text>
        }
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
  filaBusqueda: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  botonFiltros: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 16,
    padding: 10,
    marginLeft: 8,
  },
  botonFiltrosActivo: {
    backgroundColor: colores.amarillo,
    borderColor: colores.amarillo,
  },
  numeroFiltros: {
    fontWeight: 'bold',
    color: colores.texto,
    marginLeft: 4,
  },
  panelFiltros: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  limpiar: {
    color: colores.coral,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  contador: {
    fontSize: 14,
    color: colores.gris,
    marginBottom: 10,
  },
  vacio: {
    textAlign: 'center',
    color: colores.gris,
    marginTop: 40,
    fontSize: 15,
  },
});