import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignUpScreen';

const RootStack = createStackNavigator(
    {
      SignUpScreen: SignUpScreen,
      SignInScreen: SignInScreen,
    },
    {
      initialRouteName: 'SignUpScreen',
    }
  );

const Display = () => {
    return (
        <RootStack />
        // <SignUpScreen />
        // <View style={styles.layout}>
        //   <Image source={require('../assets/images/oasys.png')} style={styles.logo} />
        //   <Text style={styles.title}>Welcome To Oasys</Text>
        //   <View>
        //     <TouchableOpacity style={styles.button}>
        //         <Text style={styles.logoutText}>Logout</Text>
        //     </TouchableOpacity>
        //   </View>
        // </View>
      );
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        padding: 30,
    },
    title: {
        fontSize: 28,
        paddingTop: 10,
        paddingBottom: 30,
    },
    button: {
        alignSelf: 'center',
        width: 150,
        height: 60,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#006400',
        borderColor: 'black',
        marginBottom: 10,
    },
    layout: {
        paddingTop: 10,
        paddingBottom: 30,
    },
});


export default Display;