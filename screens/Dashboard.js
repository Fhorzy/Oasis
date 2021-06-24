import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert, addons } from 'react-native';
import Screen from './Screen';
import { FontAwesome5 } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {

  const logout = () => {

  }
  const changePassword = () => {

  }

  return (
    <View>
      <View>
        <Screen navigation={navigation} name='Dashboard' />
      </View>
      <View style={styles.container}>
        {/* <FontAwesome5 name /> */}
      </View>
    </View>

  );
}

const logout = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_picture: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    padding: 30,
  },
  editPicture: {
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 30,
  },
  text: {
    paddingBottom: 5,
    fontSize: 16,
  },
  button: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#00FF00',
    marginBottom: 10,
  },
});

export default DashboardScreen;