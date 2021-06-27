import React, { useEffect } from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { View, ActivityIndicator } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';

import Sidebar from './components/SideBar';
import ProfileScreen from './screens/UserProfile';
import DashboardScreen from './screens/Dashboard';
import PlantScreen from './screens/Plant';
import { AuthContext } from './components/context';
import Display from './screens/DisplayScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import { createStackNavigator } from 'react-navigation-stack';

const SignOutScreen = createStackNavigator({
  DisplayScreen: {
    screen: Display,
    navigationOptions: {
      title: 'Sign In',
    }
  },
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'Sign In',
    }
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Out',
    }
  }
});

const DrawerNavigator = createDrawerNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      title: "Dashboard",
      drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
    }
  },
  PlantScreen: {
    screen: PlantScreen,
    navigationOptions: {
      title: "Plant",
      drawerIcon: ({ tintColor }) => <FontAwesome5 name="seedling" size={16} color={tintColor} />
    }
  },
  SignOutScreen: {
    screen: SignOutScreen,
    navigationOptions: {
      title: "Sign Out",
      drawerIcon: ({ tintColor }) => <FontAwesome5 name="sign-out-alt" size={16} color={'tintColor'} />
    },
  },
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
}, {
  contentComponent: props => <Sidebar {...props} />
});

const AppContainer = createAppContainer(DrawerNavigator);

const App = () => {
  const[isLoading, setIsLoading] = React.useState(true);
  const[userToken, setUserToken] = React.useState(null);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const authContext = React.useMemo(() => ({
    signUp: () => {
      setUserToken('token');
      setIsLoading(false);
    },
    signIn: () => {
      setUserToken('token');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    }
  }));

  if ( isLoading ) {
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color='#00FF00' size='large'/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    { userToken !== null ? 
      <AppContainer />
       : <Display />
    }
    </AuthContext.Provider>
  );
}

export default App;