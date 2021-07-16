import React from 'react';
import  {Text, View, StyleSheet, Image} from 'react-native';

const Plantdetail = ({title, temperature, humidity, time}) => {
    return (
        <View >
            <View style = {{margin : 20, borderWidth : 7}}>
                <Text style = {styles.textHeaderStyle}>{title}</Text>
                <View style = {{flexDirection : 'row', borderTopWidth : 4}}>
                    <Image style = {styles.imageStyle} source = {require('../../assets/PlantAppLogo.png')}/>
                    <View style = {{justifyContent : 'center', marginLeft : 40}}>
                        <View style = {{flexDirection : 'row', }}>
                            <Text style = {{fontSize : 16, marginEnd : 20}}>{temperature} C</Text>
                            <Text style = {{fontSize : 16}}>{humidity} %Rh</Text>
                        </View>
                        <Text style = {styles.textContentStyle}>{time}</Text>
                        <Text style = {{fontSize : 12, fontStyle :'italic'}}>Last Watering</Text>
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
        },
    
        textHeaderStyle : {
            fontSize : 24,
            alignSelf : 'center'
        },
        textContentStyle : {
            fontSize : 18,
            marginTop : 20
        }
});

export default Plantdetail;