import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import AlertExample from './components/alert_example.js'
import Logo from './components/logo.js'
import CameraRoll from "@react-native-community/cameraroll";
import { PermissionsAndroid, Platform } from "react-native";

function App()
{
  const [photos, setPhotos] = useState([ ])
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
   
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
   
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function handleClick()
  {
    if (await hasAndroidPermission()) {
      CameraRoll.getPhotos({
        first : 10,
      })
      .then(r=>{
        console.log(r)
        if(r.edges.length > 0) {
          setPhotos(r.edges)
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
  function LinkGo()
  {
    return (
      <View>
          <Text style={styles.Btn} onPress={ handleClick }>Explore</Text>
      </View>
    )
  }
  return (
    <ScrollView>
      <AlertExample />
      <Logo />
      <LinkGo />
      <View style={styles.container}>
        {photos.map((item,index) => (
          <Image key={index} source={{ uri: item.node.image.uri }} style={styles.imageCustom} ></Image>
        ))}
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create ({
  container: {
    marginTop: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 8,
  },
  Btn: {
     color: '#fff',
     width: 140,
     backgroundColor: '#0096b5',
     padding: 18,
     fontSize: 18,
     borderRadius:6,
     textAlign: 'center',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 120
  },
  imageCustom: {
    margin: 5,
    borderRadius: 8,
    width: 150,
    height: 150
 }
})