import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const AlertExample = () => {
   const showAlert = () =>{
      Alert.alert(
         'Primakara Luar Biasa'
      )
   }
   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text style={styles.textColor}>Click Me!</Text>
      </TouchableOpacity>
      
   )
}
export default AlertExample

const styles = StyleSheet.create ({
   textColor: {
      color: '#0096b5',
      fontSize: 30
   },
   button: {
      borderBottomWidth :5,
      borderBottomColor: '#0096b5',
      backgroundColor: '#eaeaea',
      padding: 8,
      width: '100%',
      alignItems: 'center',
   }
})