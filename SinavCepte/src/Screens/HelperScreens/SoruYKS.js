import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import SoruKutu from '../../Components/HelperComponents/SoruKutu';
import styles from '../../Styles/Sorular.style';
const SoruYKS = (props) => {
  const [sorular, setSorular] = useState([]);
  useEffect(() => {
    axios.get(`http://192.168.43.215:3001/sorular/${2}`).then((response) => {
      setSorular(response.data);

    });
  });
  useEffect(() => {
    return () => {
        setSorular(null);
        console.log("Bellek temizlendi.");
    }
}, []);
  return (
    <ImageBackground source={require('../../Resimler/drawer.png')}
      style={[styles.soru, { width: undefined, height: undefined }]} >
      <SafeAreaView>
        <FlatList
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
      </SafeAreaView>
    </ImageBackground>
  )
}

export default SoruYKS