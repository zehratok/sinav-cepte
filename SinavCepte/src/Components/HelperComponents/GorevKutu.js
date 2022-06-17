import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const GorevKutu = (props) => {
    return (
        <View>
            <Font />
            <TouchableOpacity style={styles.container}
                onPress={props.onPress}
                onLongPress={props.onLongPress}>
                <View style={styles.saat}>
                    <Ionicons name="ios-timer-outline" size={140} color="#dfcef0" />
                </View>
                <View style={styles.baslik}>
                    <Text style={styles.baslikMetin}> {props.baslik} </Text>
                </View>
                <View style={styles.icerik}>
                    <Text style={styles.icerikMetin}> {props.icerik} </Text>
                </View>
                <View style={styles.tarih}>
                    <Text style={styles.tarihMetin}> {props.tarih} </Text>
                </View>
                <View style={styles.pin}>
                    <Entypo name="pin" size={24} color="#7a6790" />
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
        backgroundColor: '#eadef5',
        marginHorizontal: 10,
        marginBottom: 20,
        height: Dimensions.get('window').height / 4,
        borderTopWidth: 10,
        borderTopColor: '#e8e4ec',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    baslik: {
        borderBottomColor: '#dfcef0',
        borderBottomWidth: 1,
        margin: 5,
        height: 37,
        width: 160,
    },
    baslikMetin: {
        color: '#7a6790',
        fontSize: 14,
        marginVertical: 2,
        fontFamily: 'Ubuntu_500Medium',
        marginLeft: 2,
        marginRight: 25,
    },
    icerik: {
        flex: 4,
        margin: 10,
        borderBottomColor: '#dfcef0',
        borderBottomWidth: 1,
    },
    icerikMetin: {
        color: '#9c7fbf',
        fontSize: 13,
        fontFamily: 'Ubuntu_400Regular_Italic'
    },
    tarih: {
        flex: 2,
        margin: 4
    },
    tarihMetin: {
        color: '#9c83b8',
        fontSize: 13,
        fontFamily: 'Ubuntu_300Light'
    },
    pin: {
        position: 'absolute',
        top: -7,
        left: 150
    },
    saat: {
        position: 'absolute',
        alignSelf: 'center',
        top: 28,
    },

})