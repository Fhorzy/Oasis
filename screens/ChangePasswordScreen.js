import React from 'react';
import { View, Text, TextInput } from 'react-native';


const ChangePassword = () => {
    return (
    <View style = {{alignItems: 'center'}}>
        <Text>
            Old Password
        </Text>
        <TextInput />
        <Text>
            New Password
        </Text>
        <TextInput />
        <Text>
            Confirm Password
        </Text>
        <TextInput />
    </View>
    );
}

export default ChangePassword;