import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './src/components/LoginForm';
import RegisterPage from './src/components/RegisterForm';

export default function App() {
  return (
    <View style={styles.container}>
     <Router>
       <Switch>
         <Route exact path='/login' component={LoginPage} />
         <Route exact path='/register' component={RegisterPage} />
       </Switch>
     </Router>
     <RegisterForm/>
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
