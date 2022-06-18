import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import base64 from 'react-native-base64';

const SoruDetayKutu = (props) => {

    const resimb = props.soruResim;
    const res = base64.encodeFromByteArray(resimb, Uint8Array);
    const tarih = (props.soruTarih).slice(0, 10).replace('T', ' ')
    const zaman = (props.soruTarih).slice(10, 16).replace('T', ' ')
    const [ders, setDers] = useState('Belirtilmedi');

    useEffect(() => {
        if (props.soruDers == 1) {
            setDers("Matematik")
        }
        else if (props.soruDers == 2) {
            setDers("Fen Bilimleri")
        }
        else if (props.soruDers == 3) {
            setDers("Sosyal")
        }
        else if (props.soruDers == 4) {
            setDers("Türkçe")
        }
    }, [ders])
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.soranAd}>{props.soranAd}</Text>
                    <Text style={styles.tarih}>{tarih} / {zaman}</Text>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={styles.ders}> Ders:  {ders}</Text>
                    <Text style={styles.ders}> Konu:  {props.soruKonu}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    style={{
                        width: 350,
                        height: 400, 
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        borderRadius: 5
                    }}
                    source={{
                        uri: `data:image/png;base64, ${res}`
                    }} />
            </TouchableOpacity>
            <View>
                <Text style={styles.baslik}>{props.soruBaslik}</Text>
            </View>
            <ScrollView style={{ maxHeight: 50 }}>
                <Text style={styles.aciklama}>{props.soruAciklama}</Text>
            </ScrollView>
        </View>
    )
}

export default SoruDetayKutu;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#e8e4ec',
    },
    soru: {
        borderRadius: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    soranAd: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#7a6790',
        fontSize: 13,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    baslik: {
        marginTop: 5,
        marginHorizontal: 10,
        fontFamily: 'Ubuntu_500Medium',
        color: '#9c83b8',
        fontSize: 14
    },
    aciklama: {
        marginRight: 10,
        marginLeft: 20,
        fontFamily: 'Ubuntu_400Regular_Italic',
        color: '#9c83b8',
        fontSize: 12
    },
    ders: {
        marginHorizontal: 10,
        fontFamily: 'Ubuntu_400Regular',
        color: '#9c83b8',
        fontSize: 12,
    },
    tarih: {
        marginHorizontal: 15,
        fontFamily: 'Ubuntu_300Light',
        color: '#9c83b8',
        fontSize: 10,

    },

})