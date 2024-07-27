import * as React from 'react';
import { FavoritesProvider } from './components/FavoritesContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GettingStarted from './components/GettingStarted';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Product from './components/Product';
import FavoriteScreen from './components/FavoriteScreen';
import SectionList from './components/SectionList';


const Stack = createStackNavigator();

function App() {
  return (
    <FavoritesProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GettingStarted">
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Product" component={Product}/>
        <Stack.Screen name ="FavoriteScreen" component={FavoriteScreen}/>
        <Stack.Screen name ="SectionList" component={SectionList}/>
         </Stack.Navigator>
    </NavigationContainer>
    </FavoritesProvider>
  );
}

export default App;