import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import { TouchableOpacity } from 'react-native-gesture-handler'

const GorevKutu = (props) => {
    return (
        <View>
            <Font />
            <TouchableOpacity style={styles.container}>
                <View style={styles.baslik}>
                    <Text style={styles.baslikMetin}> {props.baslik} </Text>
                </View>
                <View style={styles.icerik}>
                    <Text style={styles.icerikMetin}> {props.icerik} </Text>
                </View>
                <View style={styles.tarih}>
                    <Text style={styles.tarihMetin}> {props.tarih} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default GorevKutu

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 20,
        height: Dimensions.get('window').height / 4
    },
    baslik: {
        flex: 2,
        borderBottomColor: '#F1F1F6',
        borderBottomWidth: 1,
        margin: 5,
    },
    baslikMetin: {
        color: '#BE9FE1',
        fontSize: 15,
        alignSelf: 'center',
        marginVertical: 2,
        fontFamily: 'Ubuntu_500Medium',
    },
    icerik: {
        flex: 4,
        margin: 10,
        borderBottomColor: '#F1F1F6',
        borderBottomWidth: 1,
    },
    icerikMetin: {
        color: '#C9B6E4',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic'
    },
    tarih: {
        flex: 2,
        margin: 10
    },
    tarihMetin: {
        color: '#C9B6E4',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic'
    },

})