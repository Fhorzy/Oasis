import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';


function ChangePassword ({navigation}) {
    const [password, setPassword] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const apiCall = async () => {
        if(!password) {
            alert('Please input your password');
            return ;
        }
        if(!new_password) {
            alert('Please input your new password');
            return ;
        }
        if(new_password.length < 6) {
            alert('Password at least 6 characters');
            return ;
        }
        if(password === new_password) {
            alert('New password should not be same from the old one');
            return ;
        }
        if(new_password !== confirm_password) {
            alert('Password not match');
            return ;
        }

        let keys;
        try {
          keys = await AsyncStorage.getItem('token');
        } catch(error) {
            console.log(error);
        }

        fetch('http://192.168.1.10:3000/api/credentials/edit/password', {
            method: 'PUT',
            body: JSON.stringify({old_password: password, new_password: new_password}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + keys
            },
        })
        .then((response) => response.json())
            .then((response) => {
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
            Old Password
        </Text>
        <View style = {{paddingLeft: 30, paddingTop: 5}}>
            <TextInput  
            onChangeText = {(value) => setPassword(value)}
            placeholder = {'Old Password'}
            secureTextEntry = {true}
            style = {styles.input}
            
            autoCapitalize = 'none' />
        </View>
        <Text style = {{paddingTop: 10, fontSize: 20, paddingLeft: 30}}>
            New Password
        </Text>
        <View style = {{paddingLeft: 30, paddingTop: 5}}>
            <TextInput  
            onChangeText = {(value) => setNewPassword(value)}
            placeholder = {'New Password'}
            secureTextEntry = {true}
            style = {styles.input}
            autoCapitalize = 'none' />
        </View>
        <Text style = {{paddingTop: 10, fontSize: 20, paddingLeft: 30}}>
            Confirm Password
        </Text>
        <View style = {{paddingLeft: 30, paddingTop: 5}}>
            <TextInput  
            onChangeText = {(value) => setConfirmPassword(value)}
            placeholder = {'Confirm New Password'}
            secureTextEntry = {true}
            style = {styles.input}
            autoCapitalize = 'none' />
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
        width: 250,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      button: {
        alignSelf: 'flex-start',
        width: 200,
        height: 60,
        padding: 10,
        marginTop: 5,
        marginLeft: 30,
        borderWidth: 1,
        backgroundColor: '#006400',
        borderColor: 'black',
      }
});

export default ChangePassword;