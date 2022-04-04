import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

const ButonCift = ({ text, onPress }) => {

    return (
        <TouchableOpacity style={styles.buton} onPress={onPress} >
            <Text style={styles.yazi}>{text}</Text>
        </TouchableOpacity >
    )
}

export default ButonCift;

const styles = StyleSheet.create({
    buton: {
        flex: 1,
        backgroundColor: '#BE9FE1',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        margin:Dimensions.get('window').width/28,

    },
    yazi: {
        color: 'white',
        fontSize: 17,
    },

})