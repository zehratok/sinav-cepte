import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../Font'

const Kutu = () => {
    return (
        <View style={styles.container}>
            <Font />
            <View style={styles.baslik}>
                <Text style={styles.baslikMetin}> Başlık </Text>
            </View>
            <View style={styles.icerik}>
                <Text style={styles.icerikMetin}> Metin </Text>
            </View>
        </View>
    )
}

export default Kutu

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
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 2,
        fontFamily: 'Ubuntu_500Medium'

    },
    icerik: {
        flex: 3,
        margin: 10
    },
    icerikMetin: {
        color: '#C9B6E4',
        fontSize: 15,
        alignSelf: 'center',
        fontFamily: 'Ubuntu_500Medium_Italic'

    },

})