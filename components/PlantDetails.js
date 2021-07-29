import React from 'react';
import  {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';

const Plantdetail = ({title, temperature, humidity, time, number}) => {

    const apiCall = async() => {
        fetch('http://192.168.1.10:3000/api/plants/water', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
            },
        })
        .then((response) => response.json())
        .then((response) => {
            alert('Success');
        })
    }

    return (
        <View >
            <View style = {{margin : 20, borderWidth : 7}}>
                <Text style = {styles.textHeaderStyle}>{title}</Text>
                <View style = {{flexDirection : 'row', borderTopWidth : 4}}>
                    <Image style = {styles.imageStyle} source = {require('../assets/images/plant.png')}/>
                    <View style = {{justifyContent : 'center', marginLeft : 40}}>
                        <View style = {{flexDirection : 'row', }}>
                            <Text style = {{fontSize : 16, marginEnd : 20}}>{temperature} C</Text>
                            <Text style = {{fontSize : 16}}>{humidity} %Rh</Text>
                        </View>
                        <View style = {{flexDirection : 'row', }}>
                        <Text style = {styles.textContentStyle}>{time}</Text>
                        </View>
                        <Text style = {{fontSize : 12, fontStyle :'italic'}}>Last Watering</Text>
                        <TouchableOpacity style = {{width:120, backgroundColor: '#006400'}} 
                            onPress = {apiCall} >
                            <Text style = {GlobalStyles.buttonText}>Water</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle : {
        width : 120,
        height : 120,
        alignItems : 'center',
        borderRadius : 80,   
        margin: 10,
        },
    
        textHeaderStyle : {
            fontSize : 24,
            alignSelf : 'center'
        },
        textContentStyle : {
            fontSize : 18,
            marginTop : 10,
            flex:1
        }
});

export default Plantdetail;