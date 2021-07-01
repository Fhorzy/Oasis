import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';

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