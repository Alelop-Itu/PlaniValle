import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import colores from '../styles/colores';

import Inicio from '../screens/Inicio';
import Repositorio from '../screens/Repositorio';
import Actividades from '../screens/Actividades';
import Planificacion from '../screens/Planificacion';
import Calendario from '../screens/Calendario';

const Tab = createBottomTabNavigator();

const MenuInferior = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // Encabezado de arriba
        headerStyle: { backgroundColor: colores.fondo },
        headerTintColor: colores.texto,
        headerTitleStyle: { fontWeight: 'bold' },
        // Barra de abajo
        tabBarStyle: { backgroundColor: colores.blanco },
        tabBarActiveTintColor: colores.coral,
        tabBarInactiveTintColor: colores.gris,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Repositorio"
        component={Repositorio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Actividades"
        component={Actividades}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="extension-puzzle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planificacion"
        component={Planificacion}
        options={{
          title: 'Planificación',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuInferior;