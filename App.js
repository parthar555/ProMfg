import DashboardIndex from './Components/Dashboard/Index';
import MoreLines from './Components/Dashboard/MoreLines';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="DashboardIndex" component={DashboardIndex} />
      <Stack.Screen name="MoreLines" component={MoreLines} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;