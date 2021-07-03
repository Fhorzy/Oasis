import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import DisplayScreen from './screens/DisplayScreen';

import DrawerNavigation from './components/NavigationScreen';
import SplashScreen from './components/SplashScreen';

  
const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName = 'DisplayScreen' >
      <Stack.Screen name = 'DisplayScreen' component = {DisplayScreen} options = {{headerShown: false}} />
      <Stack.Screen name = 'SignInScreen' component = {SignInScreen} options = {{headerShown: false}} />
      <Stack.Screen name = 'SignUpScreen' component = {SignUpScreen} options = {{headerShown: false}} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'SplashScreen'>
        <Stack.Screen name = 'SplashScreen' component = {SplashScreen} options = {{headerShown: false}} />
        <Stack.Screen name = 'Auth' component = {Auth} options = {{headerShown: false}} />
        <Stack.Screen name = 'DrawerNavigation' component = {DrawerNavigation} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;