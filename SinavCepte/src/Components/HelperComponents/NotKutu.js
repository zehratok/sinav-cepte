import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NotKutu = (props) => {
    return (
        <View>
            <Font />
            <TouchableOpacity style={styles.container} onPress={props.onPress} onLongPress={props.onLongPress}>
                <View style={styles.baslik}>
                    <Text style={styles.baslikMetin}> {props.baslik} </Text>
                </View>
                <View style={styles.icerik}>
                    <Text style={styles.icerikMetin}> {props.icerik} </Text>
                </View>
                <View style={styles.spiral1}>
                </View>
                <View style={styles.spiral2}>
                </View>
                <View style={styles.spiral3}>
                </View>
                <View style={styles.spiral4}>
                </View>
                <View style={styles.spiral5}>
                </View>
                <View style={styles.spiral6}>
                </View>
                <View style={styles.spiral7}>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NotKutu

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 20,
        height: Dimensions.get('window').height / 4,
        borderRightWidth: 8,
        borderTopWidth:5,
        borderTopColor:'#e8e4ec',
        borderBottomWidth: 8,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: '#d4beeb',
        backgroundColor: '#eadef5',
        borderWidth: 0.5
    },
    baslik: {
        flex: 1,
        borderBottomColor: '#dfcef0',
        borderBottomWidth: 1,
        marginTop:20,
        margin: 5,
    },
    baslikMetin: {
        color: '#9c83b8',
        fontSize: 15,
        marginVertical: 2,
        fontFamily: 'Ubuntu_500Medium'
    },
    icerik: {
        flex: 4,
        marginHorizontal: 10,
        marginVertical: 10
    },
    icerikMetin: {
        color: '#7a6790',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic'
    },
    spiral1: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 5,
    },
    spiral2: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 30,
    },
    spiral3: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 55,
    },
    spiral4: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 80,
    },
    spiral5: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 105,
    },
    spiral6: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 130,
    },
    spiral7: {
        width: 9,
        height: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#5b4d6a',
        position: 'absolute',
        top: -7,
        left: 155,
    },

})