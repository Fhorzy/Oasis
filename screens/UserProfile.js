import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';

function ProfileScreen ({ navigation }) {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function fetchApi() {
      setLoading(true);
      let response = await fetch('http://0999cee3977d.ngrok.io/api/profile', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
        },
      })

      try {
        setLoading(false);
        response = await response.json();
        // setData(response);
        setName(response.data.user_info.name);
        setEmail(response.data.user_info.email);
        setAvatar(response.data.user_info.avatar);
      } catch (error) {
          setLoading(false);
          console.log(error);
      }
    }
    
    fetchApi()
  }, [])

  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      <View>
      {avatar === null ? 
      <View style={styles.profileHeaderPicCircle}>
        <Text style={{fontSize: 72, color: '#ffffff', alignSelf: 'center'}}>
            {name.charAt(0)}
        </Text>
      </View> : <Image source={require('../assets/images/user.jpg')} style={styles.profile_picture} /> }
        <Text style={styles.textDescription}>Name     :</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.textDescription}>Email      :</Text>
        <Text style={styles.text}>{email}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={GlobalStyles.buttonText} 
          onPress = {() => navigation.navigate('EditProfileStack')}
          // onPress = {apiCall}
          >Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginLeft: 90
  },
  textDescription: {
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 20,
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
    marginTop: 40
  },
  profileHeaderPicCircle: {
    width: 150,
    height: 150,
    borderRadius: 80,
    color: 'white',
    backgroundColor: '#006400',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60
  },
});

export default ProfileScreen;