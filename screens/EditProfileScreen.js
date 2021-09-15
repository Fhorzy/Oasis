import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';

function EditProfileScreen (props) {

  const apiCall = async () => {
    let keys;
    try {
      keys = await AsyncStorage.getItem('token');
    } catch(error) {
        console.log(error);
    }

    fetch('http://192.168.1.10:3000/api/credentials/de-actived', {
        method: 'DELETE',
        body: JSON.stringify({agree: true}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + keys
        },
    })
    .then((response) => response.json())
        .then((response) => {
        if (response.code == 200) {
            AsyncStorage.clear();
            alert(response.data.message);
            console.log(response);
            props.navigation.replace('Auth');
          } else {
            alert(response.data.message);
        }
    })
    .catch((error) => {
      console.log(error);
    });
  }

    return (
        <View style = {{alignItems: 'center'}}>
            <TouchableOpacity style = {GlobalStyles.button} onPress = {() => props.navigation.navigate('AddProfilePictureScreen')}>
                <Text style = {GlobalStyles.buttonText}>
                    Add Profile Picture
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {GlobalStyles.button} onPress = {() => props.navigation.navigate('AddPhoneNumberScreen')}>
                <Text style = {GlobalStyles.buttonText}>
                    Add / Edit Phone Number
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {GlobalStyles.button} onPress = {() => props.navigation.navigate('AddAddressScreen')}>
                <Text style = {GlobalStyles.buttonText}>
                    Add / Edit Address
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {GlobalStyles.button} onPress = {() => props.navigation.navigate('ChangePasswordScreen')}>
                <Text style = {GlobalStyles.buttonText}>
                    Change Password
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {GlobalStyles.button}
            onPress={() => {
                Alert.alert(
                  'Deactivate Account',
                  'Are you sure? You want to Deactivate your account?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {
                        return null;
                      },
                    },
                    {
                      text: 'Confirm',
                      onPress: () => {
                        apiCall(props)
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}>
                <Text style = {GlobalStyles.buttonText}>
                    Deactivate Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default EditProfileScreen;