import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert, addons } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const PlantScreen = ({ navigation }) => {

  const logout = () => {

  }
  const changePassword = () => {

  }

  return (
    <View style = {GlobalStyles.screenContainer}>
      <Text>
        Ini Plant
      </Text>
    </View>
  );
}

const logout = () => {

}

const styles = StyleSheet.create({
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

export default PlantScreen;