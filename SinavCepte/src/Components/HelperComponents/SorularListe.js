import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../../Styles/Sorular.style'
import axios from 'axios';
import SoruKutu from './SoruKutu';

const SorularListe = (props) => {
    const [sorular, setSorular] = useState([]);
    const sinav = props.sinav;
    const icerik = props.ders;
    const [ders, setDers] = useState(null);
    useEffect(() => {
        if (icerik == null) {
            axios.get(`http://192.168.43.215:3001/sorular/${sinav}`).then((response) => {
                setSorular(response.data);
            });
        }

        else {
            if (icerik == 'M' || icerik == 'matematik' || icerik == 'Matematik' || icerik == 'MATEMATİK') {
                setDers('1');
            }
            else if (icerik == 'F' || icerik == 'Fen' || icerik == 'Fen Bilimleri' ||
                icerik == 'fizik' || icerik == 'Fizik' || icerik == 'FİZİK') {
                setDers('2');
            }
            else if (icerik == 'S' || icerik == 'sosyal' || icerik == 'SOSYAL' || 
            icerik == 'Sosyal' || icerik == 'Sosyal bilimler' || icerik == 'Sosyal bilgiler') {
                setDers('3');
            }
            else if (icerik == 'Türkçe' || icerik == 'türkçe' || icerik == 'TÜRKÇE') {
                setDers('4');
            }
            axios.get(`http://192.168.43.215:3001/sorular/${sinav}/${ders}`).then((response) => {
                setSorular(response.data);
            });
        }
    });
    useEffect(() => {
        return () => {
            setSorular([]);
            console.log("Bellek temizlendi.");
        }
    }, []);

    return (
        <View>
            <FlatList
                style={styles.liste}
                data={sorular}
                renderItem={({ item }) => <View key={item.id}>
                    <SoruKutu
                        id={item.kullanici_id}
                        ad={item.kullanici_adi}
                        baslik={item.baslik}
                        sinav={item.sinav}
                        aciklama={item.aciklama}
                        resim={item.resim.data}
                        ders={item.ders}
                        konu={item.konu}
                        tarih={item.tarih}
                        onPress={() => props.navigation.navigate('Soru Detayı',
                            {
                                soruId: item.id,
                                soruBaslik: item.baslik,
                                soruAciklama: item.aciklama,
                                soruResim: item.resim.data,
                                soruDers: item.ders,
                                soruKonu: item.konu,
                                soruTarih: item.tarih,
                                soranId: item.kullanici_id,
                                soranAd: item.kullanici_adi,
                            })}
                    />
                </View>
                }
                keyExtractor={item => item.id}
                inverted contentContainerStyle={{ flexDirection: 'column-reverse', marginBottom: 10 }}
            />
        </View>
    )
}

export default SorularListe