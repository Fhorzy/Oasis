import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert } from 'react-native';
import registerPage from './RegisterForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '', 
    }
  }

  validate=() => {
    const { email, password } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      alert("Please input email");
      return false;
    }
    else if(reg.test(this.state.email) === false){
      alert("Invalid email format");
      return false;
    }
    else if (password == "") {
      alert("Please input password");
      return false;
    }
    else
      return true;
  }

  api_call=() => {
    if (this.validate())
      alert("Success");
  }
  
  render() {
    return (
      <View>
      <Image source={require('../../assets/images/oasys.png')} style={styles.logo}/>
        <Text style={styles.title}>Log In To Oasys</Text>

        <Text style={styles.textInput}>email</Text>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(value)=> this.setState({email: value})}
          placeholder={'Email'}
          style={styles.input}
        />
        <Text style={styles.textInput}>password</Text>
        <TextInput
          onChangeText={(value)=> this.setState({password: value})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          color={'green'}
          style={styles.button}
          onPress={()=>this.api_call()}
        />

        <Text style={styles.textInput}>New to Oasys?
          <Text style={styles.textDesc} onPress={()=> moveTo(registerPage)}>Register</Text>
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
