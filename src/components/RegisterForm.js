import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import LoginPage from './LoginForm';

function App ({history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');

  const validate=() => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      alert("Please input email");
      return false;
    }
    else if(reg.test(email) === false){
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
    else if (password !== confirmPassword) {
      alert("Password not match"); 
      return false;
    }
    else
      return true;
}


  const api_call=() => {
    if (validate())
      alert("Success");
  }
  
    return (
      <View>
      <Image source={require('../../assets/images/oasys.png')} style={styles.logo}/>
        <Text style={styles.title}>Register To Oasys</Text>

<View></View>
        <Text style={styles.textInput}>email</Text>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(value)=> this.setEmail({email: value})}
          placeholder={'Email'}
          style={styles.input}
        />
        <Text style={styles.textInput}>password</Text>
        <TextInput
          onChangeText={(value)=> this.setPassword({password: value})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Text style={styles.textInput}>confirm password</Text>
        <TextInput
          onChangeText={(value)=> this.setConfirmPassword({confirmPassword: value})}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          color={'green'}
          style={styles.button}
          onPress={()=>api_call()}
        />

        <Text style={styles.textInput}>Already have an Account?</Text>
          <Text style={styles.textDesc}  
          onPress={() => history.push("/login")}
          >Login</Text>
      </View>
    );
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

export default App;