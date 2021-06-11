import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/components/LoginForm';
import RegisterPage from './src/components/RegisterForm';
import ProfilePage from './src/components/UserProfile';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
