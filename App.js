import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';


const App = () => {
  return (
    <>
      <AppNavigator />
      <StatusBar style="dark" />
    </>
  );
};

export default App;