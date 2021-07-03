import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

function DisplayScreen ({navigation}) {
    return (
      <View style = {styles.view}>
        <Image source={require('../assets/images/oasys.png')} style={styles.logo}/>
        <Text style = {styles.title}>
          Welcome To Oasys
        </Text>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SignInScreen')}> 
          <Text style = {styles.text}> Sign In </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SignUpScreen')} >
          <Text style = {styles.text}> Sign Up </Text>
        </TouchableOpacity>
      </View>
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
      fontSize: 24,
      alignSelf: 'center',
      paddingTop: 30,
    },
    view: {
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
    text: {
      padding: 5,
      alignSelf: 'center',
      fontSize: 20,
      color: '#FFF'
    },
});


export default DisplayScreen;