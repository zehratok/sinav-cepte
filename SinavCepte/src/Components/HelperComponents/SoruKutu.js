import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import base64 from 'react-native-base64';
import Font from '../Font';
const SoruKutu = (props) => {
    const resimb = props.resim;
    const res = base64.encodeFromByteArray(resimb, Uint8Array);
    const tarih = (props.tarih).slice(0, 10).replace('T', ' ')
    const zaman = (props.tarih).slice(10, 16).replace('T', ' ')
    const [ders, setDers] = useState('Belirtilmedi');
    useEffect(() => {
        if (props.ders == 1) {
            setDers("Matematik")
        }
        else if (props.ders == 2) {
            setDers("Fen Bilimleri")
        }
        else if (props.ders == 3) {
            setDers("Sosyal")
        }
        else if (props.ders == 4) {
            setDers("Türkçe")
        }
    }, [ders])


    return (

        <TouchableOpacity style={styles.container}
            onPress={props.onPress}>
            <Font />
            <View>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                        borderRadius: 5
                    }}
                    source={{
                        uri: `data:image/png;base64, ${res}`
                    }} />
            </View>
            <View style={styles.baslik}>
                <Text style={styles.baslik}>{props.baslik}</Text>
            </View>
            <View style={styles.footer}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.ders}> Ders:  {ders}</Text>
                    <Text style={styles.ders}> Konu:  {props.konu}</Text>
                </View>
                <View style={{ marginBottom: 10 }} >
                    <Text style={styles.tarih}>{zaman}</Text>
                    <Text style={styles.tarih}>{tarih}</Text>
                </View>
            </View>
        </TouchableOpacity>


    )
}

export default SoruKutu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#e8e4ec',
        marginBottom: 20
    },
    soru: {
        borderRadius: 50
    },
    baslik: {
        marginHorizontal: 10,
        fontFamily: 'Ubuntu_700Bold',
        color: '#7a6790',
        fontSize: 15,
        marginVertical:5
    },
    footer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ders: {
        marginHorizontal: 10,
        fontFamily: 'Ubuntu_400Regular',
        color: '#9c83b8',
        fontSize: 12,
    },
    tarih: {
        marginHorizontal: 20,
        fontFamily: 'Ubuntu_300Light',
        color: '#9c83b8',
        fontSize: 10,
        alignSelf: 'flex-end',
        marginBottom: 2,
    },

})