import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
// import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from './context';
import GlobalStyles from '../styles/GlobalStyles';

export default function DrawerMenu (props) {
  
  const { signOut } = React.useContext(AuthContext);

  return (
   <DrawerContentScrollView {...props}>
     <View style={GlobalStyles.background}>
      <Image source={require('../assets/images/user.jpg')} style={styles.profile} />
      <Text style={styles.name}> Bambang </Text>
     </View>
    <DrawerItemList {...props} /> 
    {/* <DrawerItem label = 'SignOut'  */}
      {/* icon = {({tintColor}) => <FontAwesome5 name="sign-out-alt" size={16} */}
      {/* color={'tintColor'} />} onPress = {() => {signOut()}} /> */}
   </DrawerContentScrollView>
  );
}

//  React navigation 2.x
// function Sidebar(props) {

//   const { signOut } = React.useContext(AuthContext);
//   return (
//     <ScrollView>
//       <View backgroundColor={"#006400"}
//         style={{ width: undefined, padding: 16, paddingTop: 48 }}
//       >
//         <Image source={require('../assets/images/user.jpg')} style={styles.profile} />
//         <Text style={styles.name}> Bambang </Text>
//       </View>
//       <View style={styles.container}>
//         <DrawerNavigatorItems {...props} />
//         <Drawer.Section>
//          <Drawer.Item 
//           icon = {({tintColor}) => <FontAwesome5 name="sign-out-alt" size={16} color={'tintColor'} />}
//           label = 'SignOut'
//           onPress = {() => {signOut()}}
//           />
//        </Drawer.Section> 
//       </View>
//     </ScrollView>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF"
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 0
  },
});

// export default Sidebar;