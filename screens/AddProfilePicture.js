import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function addProfilePicture({navigation}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const apiCall = async () => {
    if(!image) {
        alert('Please input image');
    }

    let keys;
    try {
      keys = await AsyncStorage.getItem('token');
    } catch(error) {
        console.log(error);
    }

    // api
    fetch('http://7f094cc35177.ngrok.io/api/profile/upload/avatar', {
        method: 'POST',
        body: image,
        headers: {
            'Content-Type': 'multipart/form-data ;',
            'Authorization': 'Bearer ' + keys
        },
    })
    .then((response) => response.json())
        .then((response) => {
            console.log(image);
        // If api message same as data
        if (response.code == 200) {
            alert(response.data.message);
            navigation.replace('ProfileScreen');
        } else {
            alert(response.data.message);
        }
    })
    .catch((error) => {
      console.log(error);
    });
}

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {image && <Image source={{ uri: image }} style={styles.profile_picture} />}
      <TouchableOpacity style = {GlobalStyles.button} onPress={pickImage}>
          <Text style = {GlobalStyles.buttonText}>Input Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {GlobalStyles.button} onPress = {apiCall}>
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