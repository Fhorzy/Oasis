import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddProfilePictureScreen from '../screens/AddProfilePicture';
import AddPhoneNumberScreen from '../screens/AddPhoneNumberScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

import NavigationDrawerHeader from './NavigationDrawerHeader';
import CustomSidebarMenu from './CustomSidebarMenu';
import EditProfileScreen from '../screens/EditProfileScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = 'ProfileScreen'>
      <Stack.Screen name = 'ProfileScreen' component = {ProfileScreen} 
        options = {{title: 'Profile', headerLeft: () => (<NavigationDrawerHeader navigationProps = {navigation} />)}}
      />
      <Stack.Screen name = 'EditProfileStack' component = {editProfileStack} options = {{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const editProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = 'EditProfileScreen'>
      <Stack.Screen name = 'EditProfileScreen' component = {EditProfileScreen} options = {{title: 'Edit Profile'}}/>
      <Stack.Screen name = 'AddProfilePictureScreen' component = {AddProfilePictureScreen} options = {{title: 'Add Profile Picture'}}/>
      <Stack.Screen name = 'AddPhoneNumberScreen' component = {AddPhoneNumberScreen} options = {{title: 'Add Phone Number'}}/>
      <Stack.Screen name = 'AddAddressScreen' component = {AddAddressScreen} options = {{title: 'Add Address'}}/>
      <Stack.Screen name = 'ChangePasswordScreen' component = {ChangePasswordScreen} options = {{title: 'Change Password'}}/>
    </Stack.Navigator>
  );
}

const dashboardScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = 'DashboardScreen'>
      <Stack.Screen name = 'DashboardScreen' component = {DashboardScreen} 
        options = {{title: 'Dashboard', headerLeft: () => (<NavigationDrawerHeader navigationProps = {navigation} />)}}
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
      
    </Drawer.Navigator>
  );
}
export default DrawerNav;