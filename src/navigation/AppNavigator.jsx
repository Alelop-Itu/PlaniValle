import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colores from '../styles/colores';

import Login from '../screens/Login';
import MenuInferior from './MenuInferior';
import DetallePlanificacion from '../screens/DetallePlanificacion';
import SubirPlanificacion from '../screens/SubirPlanificacion';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: { backgroundColor: colores.fondo },
                    headerTintColor: colores.texto,
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Principal" component={MenuInferior} />

                <Stack.Screen
                    name="SubirPlanificacion"
                    component={SubirPlanificacion}
                    options={{ headerShown: true, title: 'Subir planificación' }}
                />
                <Stack.Screen
                    name="DetallePlanificacion"
                    component={DetallePlanificacion}
                    options={{ headerShown: true, title: 'Planificación' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;