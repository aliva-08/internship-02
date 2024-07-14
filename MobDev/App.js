import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GettingStarted from './gettingStarted';
import SignUp from './signup';
import Login from './login';
import Welcome from './welcome';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="gettingStarted">
        <Stack.Screen name="gettingStarted" component={GettingStarted} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
