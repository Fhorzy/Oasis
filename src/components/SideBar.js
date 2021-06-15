import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

function Sidebar (props) {

  return (
   <ScrollView>
    <ImageBackground source={require('../../assets/background.png')}
      style = {{ width: undefined, padding: 16, paddingTop: 48 }}
    >
      <Image source = {require('../../assets/images/user.jpg')} style = {styles.profile} />
    </ImageBackground>

    <View>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF"
  }
});

export default Sidebar;