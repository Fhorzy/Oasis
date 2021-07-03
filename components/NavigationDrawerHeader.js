import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const NavigationDrawerHeader = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    }

    return (
        <View>
            <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }} 
                onPress={toggleDrawer} >
                <FontAwesome5 name="bars" size = {26} />
            </TouchableOpacity>
        </View>
    );
}

export default NavigationDrawerHeader;