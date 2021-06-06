import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {username: '', password: '', data: ''};
    this.login = this.login.bind(this.state.username, this.state.password);
  }
  
  // login() {
    // const { username, password } = this.state;
  // }

  render() {
    return (
      <View>
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
          style={styles.button}
          onPress={this.login.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    paddingBottom: 30,
  },
  textInput: {
    paddingBottom: 5,
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
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 250,
    paddingBottom: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255)',
  },
});
