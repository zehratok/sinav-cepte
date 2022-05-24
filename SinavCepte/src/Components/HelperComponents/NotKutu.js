import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NotKutu = (props) => {
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
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 20,
        height: Dimensions.get('window').height / 4
    },
    baslik: {
        flex: 1,
        borderBottomColor: '#F1F1F6',
        borderBottomWidth: 1,
        margin: 5,
    },
    baslikMetin: {
        color: '#BE9FE1',
        fontSize: 15,
        alignSelf: 'center',
        marginVertical: 2,
        fontFamily: 'Ubuntu_500Medium'

    },
    icerik: {
        flex: 4,
        marginHorizontal: 20,
        marginVertical:10
    },
    icerikMetin: {
        color: '#C9B6E4',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic'

    },

})