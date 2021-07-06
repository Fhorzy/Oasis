import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';
import EditProfileScreen from './EditProfileScreen';

function ProfileScreen ({ navigation }) {
  const [data, setData] = useState('');
  
  useEffect(() => {
    async function fetchApi() {
      let response = await fetch('http://0999cee3977d.ngrok.io/api/profile', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
        },
      })
      response = await response.json()
      setData(response)
    }
    
    fetchApi()
  }, [])

  return (
    <View style={GlobalStyles.screenContainer}>
      <View>

        <Image source={require('../assets/images/user.jpg')} style={styles.profile_picture} />


        <Text style={styles.text}>{data.data.user_info.name}</Text>
        <Text style={styles.text}>{data.data.user_info.email}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={GlobalStyles.buttonText} 
          onPress = {() => navigation.navigate('EditProfileStack')}
          // onPress = {apiCall}
          >Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
});

export default ProfileScreen;