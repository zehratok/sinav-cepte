import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import base64 from 'react-native-base64';

const CevapKutu = (props) => {

    const resim = base64.encodeFromByteArray(props.resim, Uint8Array);
    const tarih = (props.tarih).slice(0, 10).replace('T', ' ')
    const zaman = (props.tarih).slice(10, 16).replace('T', ' ')
    return (
        <View style={styles.container}>
            <Font />
            <View style={styles.grup}>
                <View>
                    <View>
                        <Text style={styles.isim}>{props.ad} </Text>
                    </View>
                    <View>
                        <Text style={styles.icerik}>{props.icerik}  </Text>
                    </View>
                    <View>
                        <Text style={styles.tarih}> {tarih} / {zaman}  </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={props.onPress}>
                        <Image
                            style={{
                                width: 70,
                                height: 65,
                                borderRadius: 5,
                                marginVertical: 2
                            }}
                            source={{
                                uri: `data:image/png;base64, ${resim}`
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default CevapKutu

const styles = StyleSheet.create({
    container: {
        margin: 5,
        maxWidth: 295

    },
    grup: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        maxWidth: 320

    },
    isim: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#7a6790',
        fontSize: 12,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    icerik: {
        marginHorizontal: 10,
        fontFamily: 'Ubuntu_400Regular_Italic',
        color: '#9c83b8',
        fontSize: 12,
        maxWidth: 230,
        minWidth: 220
    },
    tarih: {
        marginTop: 10,
        marginHorizontal: 5,
        fontFamily: 'Ubuntu_300Light',
        color: '#9c83b8',
        fontSize: 10,
        alignSelf: 'flex-end'
    }

})