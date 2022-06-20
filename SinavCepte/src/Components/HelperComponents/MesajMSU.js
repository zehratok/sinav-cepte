import { Alert, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GidenMesaj from './GidenMesaj'
import GelenMesaj from './GelenMesaj'
import axios from 'axios'

const MesajMSU = () => {
    const [mesajlar, setMesajlar] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.43.215:3001/sohbet-msu').then((response) => {
            setMesajlar(response.data);
        });
    });
    useEffect(() => {
        return () => {
            setMesajlar(null);
            console.log("Bellek temizlendi.");
        }
    }, []);

    return (
        <View>
            <FlatList
                data={mesajlar}
                renderItem={({ item }) => <View key={item.id}>
                    <GidenMesaj id={item.kullanici_id}
                        baslik={item.kullanici_adi}
                        icerik={item.icerik}
                        zaman={item.zaman}
                        onLongPress={() => Alert.alert(
                            "Lütfen bir eylem seçiniz.",
                            "",
                            [
                                {
                                    text: "Sil",
                                    onPress: () => {
                                        return Alert.alert(
                                            "Mesajı silmek üzeresiniz.",
                                            "Mesaj silinsin mi?",
                                            [
                                                {
                                                    text: "Sil",
                                                    onPress: () => {
                                                        axios.delete(`http://192.168.43.215:3001/mesaj-msu/${item.id}`);

                                                    }
                                                },
                                                {
                                                    text: "İptal",
                                                }
                                            ]
                                        )
                                    },
                                },
                                {
                                    text: "İptal",
                                }
                            ]
                        )
                        } />
                    <GelenMesaj id={item.kullanici_id}
                        baslik={item.kullanici_adi}
                        icerik={item.icerik}
                        zaman={item.zaman} />
                </View>
                }
                keyExtractor={item => item.id}
                inverted contentContainerStyle={{ flexDirection: 'column-reverse' }}
            />
        </View>
    )
}
export default MesajMSU