import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';

import Sidebar from './components/SideBar';
import ProfileScreen from './screens/UserProfile';
import DashboardScreen from './screens/Dashboard';
import PlantScreen from './screens/Plant';

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
    navigationOptions:{
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
  }
}, {
  contentComponent: props => <Sidebar {...props}/>
});

export default createAppContainer(DrawerNavigator);