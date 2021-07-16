import React, { useState, useEffect }from 'react';
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Image, Alert, addons, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';
import Plantdetail from '../components/PlantDetails';

function PlantScreen ({navigation}) {
  const [loading, setLoading] = useState('');
  const [title, setTitle] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setLoading(true);
    apiCall();
  }, [])


  const apiCall = async() => {
    await fetch('http://192.168.1.10:3000/api/plants/status', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
        },
    })
    .then((response) => response.json())
    .then((response) => {
      setLoading(false);
      console.log(response);
      // Kalau udah dapat akses
      // setTemperature(response.data.message.items.temperature);
      // setHumidity(response.data.message.items.soilHumidity);
      // setTime(response.data.message.items.timeStamp);
    })
  }

  return (
    <ScrollView style = {GlobalStyles.screenContainer}>
      <View style = {{margin : 20}}>
        <TouchableOpacity style = {{width:150, alignSelf: 'flex-end', backgroundColor: '#006400'}} 
          onPress = {apiCall}>
          <Text style = {GlobalStyles.buttonText}>Refresh List</Text>
        </TouchableOpacity>
      </View>
      <View>
    {/* Nanti Value nya di ganti objek di API yang mau kita masukan */}
    <Plantdetail title = "tanaman 1" temperature = "20" humidity = "78" time = "15 : 30" number = {1}/>
    <Plantdetail title = "tanaman 2" temperature = "21" humidity = "66" time = "15 : 30"number = {2}/>
    <Plantdetail title = "tanaman 3" temperature = "21" humidity = "66" time = "15 : 30" number = {3}/>
    </View>
    </ScrollView>
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