import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Profile, DashboardScreen, PlantScreen } from './src/screens';
import Sidebar from './src/components/Sidebar';

const DrawerNavigator = createDrawerNavigator({
  Profile,
  DashboardScreen,
  PlantScreen
}, {
  contentComponent: props => <Sidebar {...props}/>
});

export default createAppContainer(DrawerNavigator);