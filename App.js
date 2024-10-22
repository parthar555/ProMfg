import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardIndex from './Components/Dashboard/Index';
import HomeScreen from './Components/Dashboard/HomeScreen';
import Lines from './Components/Dashboard/Lines';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Components/Common/Header';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        
      {/* <Stack.Screen
        name="Lines"
        component={Lines}
        options={{ title: 'Lines' }}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="HomeScreen" component={DashboardIndex} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;