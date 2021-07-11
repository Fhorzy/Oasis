import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
// import ImagePicker from 'react-native-image-picker';
import GlobalStyles from '../styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageAccessFramework } from 'expo-file-system';

function addProfilePicture() {
  const [image, setImage] = useState();

  // useEffect(() => {(async () => {
  //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need permissions to make this work!');
  //       }
        
  //   })();
  // }, []);

  const pickImage = async() => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(true);
    if (status !== 'granted') {
      alert('Sorry, we need permissions to make this work!');
    }
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4]
      });

      if(!result.cancelled) {
        setImage(result);
      }

    //   const file = await FileSystem.readAsStringAsync(result.uri, {
    //     encoding: FileSystem.EncodingType.Base64,
    // });
    
    // const formdata = new FormData();
    // formdata.append('profile_avatar', result.uri);

  //   let keys;
  //   try {
  //     keys = await AsyncStorage.getItem('token');
  //   } catch(error) {
  //     console.log(error);
  //   } 

  //   response = await fetch('http://40e2a20e0576.ngrok.io/api/profile/upload/avatar', {
  //     method: 'POST',
  //     body: formdata,
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization': 'Bearer ' + keys,
  //       'Accept' : 'application/json'
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //   });
  // // });
      
        // console.log(result);
      // const manipResult = await ImageManipulator.manipulateAsync(
      //   result.uri,
      //   [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
      //   { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      // );
    // setImage(manipResult.uri);
    }
  }

  const uploadImage = async() => {
    // MediaLibrary.requestPermissionsAsync();
    // const asset = await MediaLibrary.createAssetAsync(image.uri);
    // const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
    // if (permissions.granted) {
      // const uri = permissions.directoryUri;
    
      // const files = await StorageAccessFramework.readDirectoryAsync(uri);
      // const image_path = uri + image.name;
      // const a = await FileSystem.readDirectoryAsync(asset.uri);
    // console.log(a);
    // const image_path = await FileSystem.documentDirectory + asset.uri;
    // console.log(asset);
    // const formData = new FormData();
    // formData.append ('profile_picture', {
    //   name: 'avatarUserProfile',
    //   uri: image,
    //   type: 'image/jpg'
    // })

   

    //   var dataToSend = {
    //     profile_avatar: image
    //   };
    // const newImageUri =  "file://" + image.uri.split("file://").join("");

      // let formData = new FormData();
      // formData.append('profile_avatar', 
      //    newImageUri,
      //   type: 'jpg',
      //   name: 'user'
      // );
      // let fd = new FormData();
      // fd.append('profile_avatar', formData[0]);

      // var formBody = [];
      // for (var key in dataToSend) {
      //   var encodedKey = encodeURIComponent(key);
      //   var encodedValue = encodeURIComponent(dataToSend[key]);
      //   formBody.push(encodedKey + '=' + encodedValue);
      // }
      // formBody = formBody.join('&');
      // console.log(formdata);

     
      // let data = new FormData();
      // data.append('profile_avatar', asset.uri);
 
      // let imageFile = FileSystem.uploadAsync('http://f3b2d504681a.ngrok.io/api/profile/upload/avatar',
      // asset.uri, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data', //undefined
      //       'Authorization': 'Bearer ' + keys,
      //       'Accept' : 'application/json'
      //     },
      //     httpMethod: 'POST',
      //     fieldName: 'profile_avatar'
      //   }
      // )
      // console.log(imageFile);
      
    try {
      // Create form data
      const form = new FormData();
      form.append('profile_avatar', image.uri);

      let keys;
      try {
        keys = await AsyncStorage.getItem('token');
      } catch(error) {
        console.log(error);
      } 

        await fetch('http://40e2a20e0576.ngrok.io/api/profile/upload/avatar', {
          method: 'POST',
          body: form,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + keys,
            'Accept' : 'application/json'
          },
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(form);
        })
      } catch (error) {
        console.log(error);
      }
      // console.log(formdata);

          // console.log(image);
      // If api message same as data
      // if (response.code == 200) {
      //     alert(response.data.message);
      //     navigation.replace('ProfileScreen');
      // } else {
      //   console.log(image)
      //     alert(response.data.message);
      // }
      // console.log(response.text());
      // console.log(response.json());
   
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      {image && <Image source={{ uri: image.uri }} style={styles.profile_picture} />}
      <TouchableOpacity style = {GlobalStyles.button} onPress={pickImage}>
        <Text style = {GlobalStyles.buttonText}>Input Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {GlobalStyles.button} onPress = {uploadImage}>
        <Text style = {GlobalStyles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

//   const formImage = async () => {
//     // extract the filetype
//    let fileType = image.substring(image.lastIndexOf(".") + 1);

//    let formData = new FormData();
 
//    formData.append("photo", {
//      image,
//      name: `photo.${fileType}`,
//      type: `image/${fileType}`
//    });

//    console.log(formData.image);
 
//   if(!image) {
//     alert('Please input image');
//   }

//   let keys;
//   try {
//   keys = await AsyncStorage.getItem('token');
//   } catch(error) {
//     console.log(error);
//   }

//   // api
//   fetch('http://bcf4c070115a.ngrok.io/api/profile/upload/avatar', {
//     method: 'POST',
//     body: formData,
//     headers: {
//         'Content-Type': 'multipart/form-data ;',
//         'Authorization': 'Bearer ' + keys
//     },
//   })
//     .then((response) => response.text())
//       .then((response) => {
//           console.log(image);
//       // If api message same as data
//       if (response.code == 200) {
//           alert(response.data.message);
//           navigation.replace('ProfileScreen');
//       } else {
//         console.log(response);
//           alert(response.data.message);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//   });
// }

//   const apiCall = async () => {
//     if(!image) {
//         alert('Please input image');
//     }

//     let keys;
//     try {
//       keys = await AsyncStorage.getItem('token');
//     } catch(error) {
//         console.log(error);
//     }

//     // api
//     fetch('http://7f094cc35177.ngrok.io/api/profile/upload/avatar', {
//         method: 'POST',
//         body: image,
//         headers: {
//             'Content-Type': 'multipart/form-data ;',
//             'Authorization': 'Bearer ' + keys
//         },
//     })
//     .then((response) => response.json())
//         .then((response) => {
//             console.log(image);
//         // If api message same as data
//         if (response.code == 200) {
//             alert(response.data.message);
//             navigation.replace('ProfileScreen');
//         } else {
//             alert(response.data.message);
//         }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }


const styles = StyleSheet.create({
    profile_picture: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        padding: 30,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: "#FFF",
        marginTop: 60,
      },
});

export default addProfilePicture;