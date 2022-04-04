import { Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'

const Resim = ({ kaynak }) => {
    return (
        <Image
            source={kaynak}
            style={styles.resim}
        />
    )
}

export default Resim;

const styles = StyleSheet.create({
    resim: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.5,
        resizeMode: "contain",
    },
})