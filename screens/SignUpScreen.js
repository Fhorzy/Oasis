import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert } from 'react-native';
import SignInScreen from './SignInScreen';
import { withNavigation  } from 'react-navigation';

const SignUpScreen = ({navigation}) => {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: '', 
  //     confirm_password: '',
  //   }
  // }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password, confirm_password } = this.state;

    if (email == "") {
      alert("Please input email");
      return false;
    }
    else if (reg.test(email) === false) {
      alert("Invalid email format");
      return false;
    }
    else if (password == "") {
      alert("Please input password");
      return false;
    }
    else if (password.length < 6) {
      alert("Password at least 6 characters");
      return false;
    }
    else if (password !== confirm_password) {
      alert("Password not match");
      return false;
    }
    else
      return true;
  }


  const api_call = () => {
    if (validate()) {
      alert("Success");
      // this.props.navigation.navigate('DashboardScreen');
   }
  }

  // render () {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/oasys.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up To Oasys</Text>

      <Text style={styles.textInput}>email</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(value) => setEmail(value)}
        placeholder={'Email'}
        style={styles.input}
      />
      <Text style={styles.textInput}>password</Text>
      <TextInput
        onChangeText={(value) => setPassword(value)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.textInput}>confirm password</Text>
      <TextInput
        onChangeText={(value) => setConfirmPassword(value)}
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
        onPress={() => this.props.navigation.navigate('SignInScreen')} 
      >Sign In</Text>
    </View>
  );}
// }

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

export default SignUpScreen;