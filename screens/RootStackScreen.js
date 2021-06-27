import React from 'react';

import { createStackNavigator } from 'react-navigation/stack';

import LoginScreen from './LoginForm';
import RegisterScreen from './RegisterForm';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LoginForm" component={LoginScreen}/>
        <RootStack.Screen name="RegisterForm" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;