import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from '../url';

function addProfilePicture({navigation}) {
  const [image, setImage] = useState();

  const pickImage = async() => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(true);
  
    if (status !== 'granted') {
      alert('Sorry, we need permissions to make this work!');
    }

    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4]
      });
    
      if(!result.cancelled) {
        setImage(result);
      }
    }
  }

const uploadImage = async() => {
  if(!image) {
    alert('Please input image');
    return;
  }
  try {
    const form = new FormData();
    form.append('profile_avatar', {
      name: Date.now() + '.jpg',
      uri: image.uri,
      type: 'image/jpg'
    });
    
    let keys;
    try {
      keys = await AsyncStorage.getItem('token');
    } catch(error) {
      console.log(error);
    } 
    
    fetch(url + '/api/profile/upload/avatar/', {
      method: 'POST',
      body: form,
      headers: {
        'Authorization': 'Bearer ' + keys,
        },
    })
      .then((response) => response.json())
      .then((response) => {
        alert(response.data.message);
        navigation.replace('ProfileScreen');
      })
  } catch (error) {
      console.log(error);
    }
}
  
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      {image && <Image source={{ uri: image.uri }} style={styles.profile_picture} />}
      <TouchableOpacity style = {GlobalStyles.button} onPress={pickImage}>
        <Text style = {GlobalStyles.buttonText}>Input Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {GlobalStyles.button} onPress = {uploadImage}>
        <Text style = {GlobalStyles.buttonText}>Proceed</Text>
      </TouchableOpacity>
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
});

export default addProfilePicture;