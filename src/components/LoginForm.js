import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {username: '', password: '', data: ''};
    this.login = this.login.bind(this.state.username, this.state.password);
  }
  
  login() {
    const { username, password } = this.state;
  }

  render() {
    return (
      <View>
      <Image source={require('../../assets/images/logo.jpg')} style={styles.logo}/>
        <Text style={styles.title}>Sign In To Oasis</Text>

        <Text style={styles.textInput}>email</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <Text style={styles.textInput}>password</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          color={'green'}
          style={styles.button}
          onPress={this.login.bind(this)}
        />

        <Text style={styles.textInput}>New to Oasis?
          <Text style={styles.textDesc}>Sign Up</Text>
        </Text>
        <Text style={styles.textDesc}>
          forgot password?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width:100,
    height:100,
    alignSelf: 'center',
    padding: 30,
  },
  title: {
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 30,
  },
  textInput: {
    paddingBottom: 5,
    fontSize: 16,
  },
  button: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#00FF00',
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  textDesc: {
    alignItems: 'center',
    color: 'blue',
    textDecorationLine: 'underline', 
    fontSize: 16,
  }
});
