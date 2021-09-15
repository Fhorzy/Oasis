import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import url from '../url';

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [name, setName] = useState(null);

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
    
    fetch(url + '/api/credentials/register', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
      .then((response) => {
        if (response.code == 200) {
          alert(response.data.message);
          navigation.replace('SignInScreen');
        } else {
          alert(response.data.message);
          console.log(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

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