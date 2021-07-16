import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddAddress ({navigation}) {
    const [address, setAddress] = useState('');

    const apiCall = async () => {
        if(!address) {
            alert('Please input address');
        }

        let keys;
        try {
          keys = await AsyncStorage.getItem('token');
        } catch(error) {
            console.log(error);
        }

        // api
        fetch('http://192.168.1.10:3000/api/profile/edit/address', {
            method: 'POST',
            body: {address: address},
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + keys
            },
        })
        .then((response) => response.json())
            .then((response) => {
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
    <View>
        <Text style = {{paddingTop: 60, fontSize: 20, paddingLeft: 30}}>
            Please add your home address
        </Text>
        <View style = {{paddingLeft: 30, paddingTop: 5}}>
            <TextInput  
            autoCorrect = {false}
            autoCompleteType = 'street-address'
            autoCapitalize = 'words'
            onChangeText = {(value)=> setAddress(value)}
            placeholder = {'Enter Address'}
            style = {styles.input}
            keyboardType = 'default'/>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {apiCall}>
            <Text style = {GlobalStyles.buttonText}>
                Submit
            </Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      button: {
        alignSelf: 'flex-start',
        width: 150,
        height: 60,
        padding: 10,
        marginTop: 5,
        marginLeft: 30,
        borderWidth: 1,
        backgroundColor: '#006400',
        borderColor: 'black',
      }
});

export default AddAddress;