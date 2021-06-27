import React, { useEffect } from 'react';

// react navigation 2.x
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';

import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5, Feather } from '@expo/vector-icons';

//  Screen
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/Dashboard';
import ProfileScreen from './screens/UserProfile';
import PlantScreen from './screens/Plant';
import DisplayScreen from './screens/DisplayScreen';

//  Component
// import Sidebar from './components/SideBar';
import DrawerMenu from './components/SideBar';

import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();

function DrawerNavigation () {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />} >
        <Drawer.Screen name = 'DashboardScreen' component = {DashboardScreen} 
        options = {{title: 'Dashboard', drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} /> }} />
        <Drawer.Screen name = 'ProfileScreen' component = {ProfileScreen} 
        options = {{title: 'Profile', drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />}}/>
        <Drawer.Screen name = 'PlantScreen' component = {PlantScreen} 
        options = {{title: 'Plant', drawerIcon: ({ tintColor }) => <FontAwesome5 name="seedling" size={16} color={tintColor} />}}/>
        <Drawer.Screen name = 'DisplayScreen' component = {DisplayScreen}
        options = {{title: 'Sign Out', drawerIcon: ({ tintColor }) => <FontAwesome5 name="sign-out-alt" size={16} color={'tintColor'} />}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Stack = createDrawerNavigator();

function StackNavigation () {
  return (
    <NavigationContainer>
      <Stack.Screen name = 'SignInScreen' component = {SignInScreen} />
    </NavigationContainer>
  );
}

  // React navigation 2.x
  // DashboardScreen: {
  //   screen: DashboardScreen,
  //   navigationOptions: {
  //     title: "Dashboard",
  //     drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
  //   }
  // },
  // ProfileScreen: {
  //   screen: ProfileScreen,
  //   navigationOptions: {
  //     title: "Profile",
  //     drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
  //   }
  // },
  // PlantScreen: {
  //   screen: PlantScreen,
  //   navigationOptions: {
  //     title: "Plant",
  //     drawerIcon: ({ tintColor }) => <FontAwesome5 name="seedling" size={16} color={tintColor} />
  //   }
  // },
  // SignOutScreen: {
    // screen: SignInScreen,
    // navigationOptions:
      // ({ navigation }) => ({title: "Sign Out"}),
      // drawerIcon: ({ tintColor }) => <FontAwesome5 name="sign-out-alt" size={16} color={'tintColor'} />
  // },
  // SignIn: {
  //   screen: SignScreen,
  //   navigationOptions: {
  //     title: ''
  //   }
  // }
  // SignInScreen: {
  //   screen: SignInScreen,
  //   navigationOptions: {
  //     title: '',
  //   }
  // },
  // SignUpScreen: {
  //   screen: SignUpScreen,
  //   navigationOptions: {
  //     title: '',
  //   }
  // }
// }, {
//   contentComponent: props => <Sidebar {...props} />
// });

// const AppContainer = createAppContainer(DrawerNavigator);

const App = () => {
  // const[isLoading, setIsLoading] = React.useState(true);
  // const[userToken, setUserToken] = React.useState(null);

  const initLoginState = {
    isLoading: true,
    userEmail : null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'GET_TOKEN' :
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN' :
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT' :
        return {
          ...prevState,
          userEmail: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER' :
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initLoginState);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type: 'GET_TOKEN', token: 'authToken'});
    }, 1000);
  }, []);

  const authContext = React.useMemo(() => ({
    signUp: () => {
      setUserToken('token');
      setIsLoading(false);
    },
    signIn: (email, password) => {
      let userToken;
      email = null;
      if ( email == 'admin@oasis.com' && password == 'asdasd' ) {
        userToken = 'authToken';
      }
      // `email:` dapat dari action.email `token` dapat dari action.token
      dispatch({ type: 'LOGIN', email: email, token: userToken});
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    }
  }));

  if ( loginState.isLoading ) {
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color='#00FF00' size='large'/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <DrawerNavigation />
    </AuthContext.Provider>

    // { loginState.userToken !== null ? 

    //   <DrawerNavigation />
    //    : <DisplayScreen />
    // }
  );
}

export default App;