import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert } from 'react-native';
import SignInScreen from './SignInScreen';

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '', 
      confirm_password: '',
    }
  }
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password, confirm_password } = this.state;

    if (this.state.email == "") {
      alert("Please input email");
      return false;
    }
    else if (reg.test(this.state.email) === false) {
      alert("Invalid email format");
      return false;
    }
    else if (this.state.password == "") {
      alert("Please input password");
      return false;
    }
    else if (this.state.password.length < 6) {
      alert("Password at least 6 characters");
      return false;
    }
    else if (this.state.password !== this.state.confirm_password) {
      alert("Password not match");
      return false;
    }
    else
      return true;
  }


  api_call = () => {
    if (this.validate()) {
      alert("Success");
   }
  }

  render () {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/oasys.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up To Oasys</Text>

      <Text style={styles.textInput}>email</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(value) => this.setState({email: value})}
        placeholder={'Email'}
        style={styles.input}
      />
      <Text style={styles.textInput}>password</Text>
      <TextInput
        onChangeText={(value) => this.setState({password: value})}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.textInput}>confirm password</Text>
      <TextInput
        onChangeText={(value) => this.setState({confirm_password: value})}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title={'Sign Up'}
        color={'green'}
        style={styles.button}
        onPress={() => this.api_call()}
      />

      <Text style={styles.textInput}>Already have an Account?</Text>
      <Text style={styles.textDesc}
        onPress={() => this.props.navigation.navigate('ProfileScreen')}
      >Sign In</Text>
    </View>
  );}
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
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
  },
  container: {
    alignSelf:'center'
  }
});

export default SignUp;