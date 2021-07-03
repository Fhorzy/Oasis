import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/Dashboard';
import ProfileScreen from '../screens/UserProfile';
import PlantScreen from '../screens/Plant';

import NavigationDrawerHeader from './NavigationDrawerHeader';
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const dashboardScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = 'DashboardScreen'>
      <Stack.Screen name = 'DashboardScreen' component = {DashboardScreen} 
        options = {{title: 'Dashboard', headerLeft: () => (<NavigationDrawerHeader navigationProps = {navigation} />)}}
      />
    </Stack.Navigator>
  );
}

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = 'ProfileScreen'>
      <Stack.Screen name = 'ProfileScreen' component = {ProfileScreen} 
        options = {{title: 'Profile', headerLeft: () => (<NavigationDrawerHeader navigationProps = {navigation} />)}}
      />
    </Stack.Navigator>
  );
}

const plantScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = 'PlantScreen'>
      <Stack.Screen name = 'PlantScreen' component = {PlantScreen} 
        options = {{title: 'Plant', headerLeft: () => (<NavigationDrawerHeader navigationProps = {navigation} />)}}
      />
    </Stack.Navigator>
  );
}

const DrawerNav = (props) => {
  return (
    <Drawer.Navigator screenOptions = {{headerShown: false}} drawerContent = {CustomSidebarMenu}>
      <Drawer.Screen name = 'dashboardScreenStack' component = {dashboardScreenStack} 
        options = {{drawerLabel: 'Dashboard'}} />
        <Drawer.Screen name = 'profileScreenStack' component = {profileScreenStack} 
        options = {{drawerLabel: 'Profile'}} />
        <Drawer.Screen name = 'plantScreenStack' component = {plantScreenStack} 
        options = {{drawerLabel: 'Plant'}} />
    </Drawer.Navigator>
  );
}
export default DrawerNav;