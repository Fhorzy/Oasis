import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error_message, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);


  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setErrorMessage('');

    if (!name) {
      alert('Please input name');
      return;
    }
    if (!email) {
      alert('Please input email');
      return;
    }
    if (reg.test(email) === false) {
      alert('Invalid email format');
      return;
    }
    if (!password) {
      alert('Please input password');
      return;
    }
    if (password.length < 6) {
      alert("Password at least 6 characters");
      return;
    }
    if (password !== confirm_password) {
      alert("Password not match");
      return;
    }

    setLoading(true);
    var dataToSend = {
      name: name,
      email: email,
      password: password,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    
    //api
    fetch('http://997f5a4b5fcf.ngrok.io/api/credentials/register', {
      method: 'POST',
      body: formBody,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        // console.log(responseJson);
        // If api response message equals to success
        if (responseJson.status === 'OK') {
          // setIsRegistraionSuccess(true);
          alert(
            'Registration Successful. Please Sign In to proceed'
          );
          navigation.replace('SignInScreen');
        } else {
          setErrorMessage(responseJson.msg);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }
  
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/user.jpg')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('SignInScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // render () {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} >
      <Image source={require('../assets/images/oasys.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up To Oasys</Text>

      <Text style = {styles.textInput}>name</Text>
      <TextInput 
        autoCapitalize = 'sentences'
        autoCorrect = {false}
        onChangeText = {(value) => setName(value)}
        placeholder = {'Name'}
        style = {styles.input}
      />
      <Text style={styles.textInput}>email</Text>
      <TextInput
        autoCapitalize = 'none'
        autoCorrect = {false}
        onChangeText = {(value) => setEmail(value)}
        placeholder = {'Email'}
        style = {styles.input}
        keyboardType = 'email-address'
      />

      <Text style={styles.textInput}>password</Text>
      <TextInput
        onChangeText = {(value) => setPassword(value)}
        placeholder = {'Password'}
        secureTextEntry = {true}
        style = {styles.input}
        autoCapitalize = 'none'
      />

      <Text style={styles.textInput}>confirm password</Text>
      <TextInput
        onChangeText={(value) => setConfirmPassword(value)}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        style={styles.input}
        autoCapitalize = 'none'
      />

      <Button
        title={'Sign Up'}
        color={'green'}
        style={styles.button}
        onPress={validate}
      />

      <Text style={styles.textInput}>Already have an Account?</Text>
      <Text style={styles.textDesc}
        onPress={() => navigation.navigate('SignInScreen')} 
      >Sign In</Text>
      </ScrollView>
    </View>
  );
}
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
    alignSelf:'center',
    paddingTop : 60
  }
});

export default SignUpScreen;