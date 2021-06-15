import React from 'react';
import Screen from './Screen';
import ProfileScreen from './UserProfile';

export const Profile = ({navigation}) => <Screen navigation={navigation} name='Profile' />;
export const DashboardScreen = ({navigation}) => <Screen navigation={navigation} name='Dashboard' />;
export const PlantScreen = ({navigation}) => <Screen navigation={navigation} name='Tanaman' />;
