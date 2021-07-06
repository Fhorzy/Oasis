import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';


const deactivateAccount = ({navigation}) => {
    AsyncStorage.clear();
    alert('Success');
    navigation.replace('Auth');
}

const EditProfileScreen = (props) => {
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
                        deactivateAccount(props);
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