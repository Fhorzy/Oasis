import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style = {GlobalStyles.screenContainer}>
      <View style = {{alignSelf: 'center'}}>
        <Text>
          Ini Dashboard
        </Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
button: {
  alignSelf: 'center',
  width: 150,
  height: 60,
  padding: 10,
  borderWidth: 1,
  backgroundColor: '#006400',
  borderColor: 'black',
  marginTop: 10,
},
});

export default DashboardScreen;