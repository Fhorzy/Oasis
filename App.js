import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import LoginPage from './src/components/LoginForm';
import RegisterPage from './src/components/RegisterForm';
import UserProfilePage from './src/components/UserProfile';
import HomePage from './src/components/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
     <NativeRouter>
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/register' component={RegisterPage} />
         <Route exact path='/login' component={LoginPage} />
         <Route exact path='/user/profile' component={UserProfilePage} />
       </Switch>
     </NativeRouter>
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
