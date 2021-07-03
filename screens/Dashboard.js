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

export default DashboardScreen;