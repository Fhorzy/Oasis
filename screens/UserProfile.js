import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';

function ProfileScreen ({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function fetchApi() {
      setLoading(true);
      let response = await fetch('http://192.168.1.10:3000/api/profile', {
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
        setName(response.data.user_info.name);
        setEmail(response.data.user_info.email);
        // setAvatar(response.data.user_info.avatar);
        console.log(response);
    // console.log(avatar.slice(-4));
// console.log(avatar);
      } catch (error) {
          setLoading(false);
          console.log(error);
      }
    }
    // /api/profile/download/avatar/:name
    // avatar.slice(-4) == null ? fetchProfilePic() : setAvatar();
    fetchApi();
    // getProfileAvatar();
  }, [])

  const getProfileAvatar = async() => {
      fetch ('http://192.168.1.10:3000/api/profile/download/avatar/1-profile_avatar-user.jpg', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
          // 'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
        },
      })
      .then((response) => response.json())
      .then((response) => {
        setAvatar(response.data.file);
        console.log(response);
        // console.log(avatar);
        // console.log(avatar);
      })
      // );
  }

  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      <View>
      {/* {avatar.slice(-4) == null ? */}
      {/* {avatar && <Image source={{ uri: avatar }} style={styles.profile_picture} />} */}
      {/* { name !== null ?  */}
      <View style={styles.profileHeaderPicCircle}>
        <Text style={{fontSize: 72, color: '#ffffff', alignSelf: 'center'}}>
            {name.charAt(0)}
        </Text>
      {/* </View> : <Image style={styles.profile_picture} source = {getProfileAvatar} /> } */}
      </View> 
      {/* : <Image source = {{uri: avatar}} style={styles.profile_picture} /> } */}

      <View style = {{flexDirection: 'row'}}>
        <Text style={styles.textDescription}>Name     :  </Text>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style = {{flexDirection: 'row'}}>
        <Text style={styles.textDescription}>Email      :  </Text>
        <Text style={styles.text}>{email}</Text>
      </View>
        <TouchableOpacity style={styles.button}>
          <Text style={GlobalStyles.buttonText} 
          onPress = {() => navigation.navigate('EditProfileStack')}
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
    fontSize: 20,
    paddingTop: 30
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