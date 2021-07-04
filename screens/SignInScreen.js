import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignInScreen ({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error_message, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

 const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setErrorMessage('');

    if (!email) {
      alert("Please input email");
      return;
    }
    if (reg.test(email) === false) {
      alert("Invalid email format");
      return;
    }
    if (!password) {
      alert("Please input password");
      return;
    }
    if (password.length < 6) {
      alert("Password at least 6 characters");
      return;
    }

    setLoading(true);
    let dataToSend = {email: email, password: password};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    // api
    fetch('http://997f5a4b5fcf.ngrok.io/api/credentials/login', {
      method: 'POST',
      // body: formBody,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        // If api message same as data
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('token', responseJson.data.email);
          console.log(responseJson.data.token);
          navigation.replace('NavigationScreen');
        } else {
          setErrorMessage(responseJson.msg);
          alert('Please check your email or password');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/oasys.png')} style={styles.logo}/>
      </View>

      <View style={styles.layout}>
        <Text style={styles.title}>Sign In To Oasys</Text>
      </View>

      <View style={styles.inputLayout}><Text style={styles.textInput}>email</Text></View>
      <View>
      <TextInput
        autoCapitalize = 'none'
        autoCorrect = {false}
        onChangeText = {(value)=> setEmail(value)}
        placeholder = {'Email'}
        style = {styles.input}
        keyboardType = 'email-address'
      />
      </View>
      
      <View style={styles.inputLayout}><Text style={styles.textInput}>password</Text></View>
      <View>
      <TextInput
        onChangeText={(value)=> setPassword(value)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      </View>
        
      <View>
      <Button
        title={'Sign In'}
        color={'green'}
        style={styles.button}
        onPress={() => navigation.navigate('DrawerNavigation')}
        // onPress = {validate}
      /></View>

      <Text style={styles.textInput}>New to Oasys?
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.textDesc}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  inputLayout: {
    paddingBottom: 5,
  },
  logo: {
    width:100,
    height:100,
    alignSelf: 'center',
    padding: 30,
  },
  title: {
    fontSize: 28,
  },
  textInput: {
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
  },
});

export default SignInScreen;