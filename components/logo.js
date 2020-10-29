import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Logo = () => {
    return (
        <View>
            <Image source={{uri: 'http://spada.primakara.ac.id/pluginfile.php/1/theme_alpha/customlogotopbar/1603071694/favicon.png'}} style={styles.lgo} />
            <SubTeks />
        </View>
    )
}

const SubTeks = () => {
    return (
        <Text style={styles.subTeksStyle}>Wellcome To Our Gallery</Text>
    )
}

export default Logo

const styles = StyleSheet.create ({
    lgo: {
       width: 100,
       height: 100,
       marginTop: 185,
       marginLeft: 'auto',
       marginRight: 'auto'
    },
    subTeksStyle: {
        fontSize: 24,
        textAlign: 'center',
        color: '#777'
    }
 })