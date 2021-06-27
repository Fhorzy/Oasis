import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import { createAppContainer } from 'react-navigation';

// const RootStack = createStackNavigator(
//     {
//       SignUpScreen: SignUpScreen,
//       SignInScreen: SignInScreen,
//     },
//     {
//       initialRouteName: 'SignUpScreen',
//     }
//   );

// const StackScreen = createStackNavigator({
//     // DisplayScreen: {
//     //   screen: Display,
//     //   navigationOptions: {
//     //     title: 'Sign In',
//     //   }
//     // },
//     SignInScreen: {
//       screen: SignInScreen,
//       navigationOptions: {
//         title: 'Sign In',
//       }
//     },
//     SignUpScreen: {
//       screen: SignUpScreen,
//       navigationOptions: {
//         title: 'Sign Out',
//       }
//     }
//   });

//   const SignOutScreen = createAppContainer(StackScreen);

const Stack = createStackNavigator();

function StackNavigation () {
  return (
      <Stack.Screen name = 'SignInScreen' component = {SignInScreen} />
  );
}

function DisplayScreen ({navigation}) {
// render(){
    return (
      <View style = {styles.view}>
      <StackNavigation />
        <Image source={require('../assets/images/oasys.png')} style={styles.logo}/>
        <Text style = {styles.title}>
          Welcome To Oasys
        </Text>
        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('SignInScreen')}>
          <Text style = {styles.text}> Sign In </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} >
          <Text style = {styles.text}> Sign Up </Text>
        </TouchableOpacity>
      </View>
        // <Text>Test</Text>
        // <SignInScreen screenName="SignUpScreen" />
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
    // }
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        padding: 30,
    },
    title: {
      fontSize: 24,
      alignSelf: 'center',
      paddingTop: 30,
    },
    view: {
        // fontSize: 28,
        paddingTop: 60,
    },
    button: {
      alignSelf: 'center',
      width: 150,
      height: 60,
      padding: 10,
      borderWidth: 1,
      backgroundColor: '#006400',
      borderColor: 'black',
      marginTop: 10,
    },
    layout: {
        paddingTop: 10,
        paddingBottom: 30,
    },
    text: {
      padding: 5,
      alignSelf: 'center',
      fontSize: 20,
      color: '#FFF'
    },
});


export default DisplayScreen;