import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation  } from 'react-navigation';
import SignUpScreen from './SignUpScreen';

import { AuthContext } from '../components/context';


function SignInScreen ({navigation}) {

  // This is for func component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // This is for class component
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: '', 
  //     confirm_password: '',
  //   }
  // }

 const validate=() => {
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
    else
      return true;
  }
  
const {signIn} = React.useContext(AuthContext);

 const api_call=() => {
    if (validate()) {
      alert("Success");
      signIn();
    }
  }
  
  // render() {
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
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(value)=> setEmail(value)}
        placeholder={'Email'}
        style={styles.input}
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
        onPress={()=>api_call()}
        // onPress={()=>{signIn()}}
      /></View>

      <Text style={styles.textInput}>New to Oasys?
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.textDesc}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
      {/* <Text style={styles.textDesc}>
        forgot password?
      </Text> */}
    </View>
  );
}
// }

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
    alignSelf:'center'
  },
});

export default SignInScreen;