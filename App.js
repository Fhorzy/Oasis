import React, { useEffect } from 'react';

// react navigation 2.x
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';

import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

//  Screen
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/Dashboard';
import ProfileScreen from './screens/UserProfile';
import PlantScreen from './screens/Plant';
import DisplayScreen from './screens/DisplayScreen';

//  Component
import DrawerNavigation from './components/NavigationScreen';
import { AuthContext } from './components/context';
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
  // const[isLoading, setIsLoading] = React.useState(true);
  // const[userToken, setUserToken] = React.useState(null);

  // const initLoginState = {
  //   isLoading: true,
  //   userEmail : null,
  //   userToken: null,
  // }

  // const loginReducer = (prevState, action) => {
  //   switch( action.type ) {
  //     case 'GET_TOKEN' :
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN' :
  //       return {
  //         ...prevState,
  //         userEmail: action.email,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT' :
  //       return {
  //         ...prevState,
  //         userEmail: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER' :
  //       return {
  //         ...prevState,
  //         userEmail: action.email,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // }

  // const [loginState, dispatch] = React.useReducer(loginReducer, initLoginState);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // setIsLoading(false);
  //     dispatch({ type: 'GET_TOKEN', token: 'authToken'});
  //   }, 1000);
  // }, []);

  // const authContext = React.useMemo(() => ({
  //   signUp: () => {
  //     setUserToken('token');
  //     setIsLoading(false);
  //   },
  //   signIn: (email, password) => {
  //     let userToken;
  //     email = null;
  //     if ( email == 'admin@oasis.com' && password == 'asdasd' ) {
  //       userToken = 'authToken';
  //     }
  //     // `email:` dapat dari action.email `token` dapat dari action.token
  //     dispatch({ type: 'LOGIN', email: email, token: userToken});
  //   },
  //   signOut: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //   }
  // }));

  // if ( loginState.isLoading ) {
  //   return (
  //     <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <ActivityIndicator color='#00FF00' size='large'/>
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'SplashScreen'>
        <Stack.Screen name = 'SplashScreen' component = {SplashScreen} options = {{headerShown: false}} />
        <Stack.Screen name = 'Auth' component = {Auth} options = {{headerShown: false}} />
        <Stack.Screen name = 'DrawerNavigation' component = {DrawerNavigation} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <AuthContext.Provider value={authContext}>
    // <NavigationContainer>
    // { loginState.userToken == null ? 
    //   <DrawerNavigation />
    //    : <DisplayScreen />
    // }
    // </NavigationContainer>
    // </AuthContext.Provider>
  );
}

export default App;