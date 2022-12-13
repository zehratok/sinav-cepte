import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CevapKutu from './CevapKutu';

const Cevaplar = (props) => {
    const soru_id = props.soruId;
    const [cevaplar, setCevaplar] = useState([]);
    const [metin, setMetin] = useState('Cevaplar yükleniyor..');

    useEffect(() => {
        axios.get(`https://b4de-149-140-154-149.eu.ngrok.io/cevaplar/${soru_id}`).then((response) => {
            setCevaplar(response.data);
        });
        if (cevaplar == '') {
            setMetin('Henüz cevaplanmamış :( ')
        }
        else {
            setMetin('Cevaplar')
        }
    });
    useEffect(() => {
        return () => {
            setCevaplar([]);
            console.log("Bellek temizlendi.");
        }
    }, []);
    return (
        <View style={styles.cevap}>
            <Text style={styles.cevaplar}>{metin}</Text>
            {
                cevaplar.map(
                    cevap => {
                        return (
                            <View key={cevap.id}>
                                <CevapKutu
                                    ad={cevap.kullanici_adi}
                                    icerik={cevap.icerik}
                                    resim={cevap.resim.data}
                                    tarih={cevap.tarih}
                                    onPress={() => props.navigation.navigate('Resim Detayı',
                                        {
                                            resim: cevap.resim.data,
                                        })}
                                />
                            </View>
                        )
                    }
                )
            }
        </View>
    )
}

export default Cevaplar

const styles = StyleSheet.create({
    cevap: {
        marginHorizontal: 20,
        backgroundColor: '#e8e4ec',
        marginBottom: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
 
    cevaplar: {
        marginLeft:15,
        marginBottom:10,
        backgroundColor: '#e8e4ec',
        fontFamily: 'Ubuntu_700Bold',
        fontSize:15,
        color: '#5b4d6a'
    },
})