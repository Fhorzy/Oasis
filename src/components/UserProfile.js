import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert, addons } from 'react-native';

function App (props) {

  return (
    <View>
    <Image source={require('../../assets/images/user.jpg')} style={styles.profile_picture}/>
    <Text style={styles.editPicture}>Edit Picture</Text>
  
    <Text style={styles.text}>Nama</Text>
    <Text style={styles.textInput}>Email</Text>
    <Text style={styles.textInput}>Password</Text>
          
      <Button
        title={'Log Out'}
        color={'green'}
        style={styles.button}
        onPress={()=>this.logout()}
      />
    </View>
  );
}

const logout=() => {

}  

const styles = StyleSheet.create({
  profile_picture: {
    width:100,
    height:100,
    alignSelf: 'center',
    padding: 30,
  },
  editPicture: {
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 30,
  },
  text: {
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
});

export default App;