import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const ProfileScreen = ({ navigation }) => {

  const nama = "Bambang";

  return (
    <View style={GlobalStyles.screenContainer}>
      <View>

        <Image source={require('../assets/images/user.jpg')} style={styles.profile_picture} />


        <Text style={styles.text}>Nama</Text>
        {/* <Text style={styles.text}> */}
          {/* {nama} */}
        {/* </Text> */}
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>Password</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const signOut = () => {

}

const styles = StyleSheet.create({
  profile_picture: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    padding: 30,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: "#FFF",
    marginTop: 60,
  },
  editPicture: {
    fontSize: 20,
    alignSelf: "center",
    // paddingTop: 10,
    // paddingBottom: 30,
  },
  text: {
    padding: 20,
    fontSize: 20,
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
  logoutText: {
    padding: 5,
    alignSelf: 'center',
    fontSize: 20,
    color: '#FFF'
  }
});

export default ProfileScreen;