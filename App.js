import DashboardIndex from './Components/Dashboard/Index';
import MoreLines from './Components/Dashboard/MoreLines';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemsDashboard from './Components/Dashboard/ItemsDashboard';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="DashboardIndex" component={DashboardIndex} />
            <Stack.Screen name="MoreLines" component={MoreLines} />
            <Stack.Screen name="ItemsDashboard" component={ItemsDashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>

  );
};

export default App;