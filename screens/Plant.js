import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, Alert, addons } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const PlantScreen = ({ navigation }) => {
  return (
    <View style = {GlobalStyles.screenContainer}>
      <View style = {{margin : 20}}>
                <Text style = {styles.textHeaderStyle}>Tanaman 1</Text>
                <View style = {{flexDirection : 'row'}}>
                    <Image style = {styles.imageStyle} source = {require('../../assets/images/oasys.png')}/>
                    <View style = {{justifyContent : 'center'}}>
                        <Text style = {styles.textContentStyle}>Temparature</Text>
                        <Text style = {styles.textContentStyle}>Time</Text>
                    </View>
                </View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile_picture: {
    width: 100,
    height: 100,
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
  //My Own Style
  imageStyle : {
    width : 120,
    height : 120,
    alignItems : 'center',
    borderRadius : 80,   
    },

    textHeaderStyle : {
        fontSize : 24,
        alignSelf : 'center'
    },
    textContentStyle : {
        fontSize : 18,
        marginLeft : 50
    }
});

export default PlantScreen;