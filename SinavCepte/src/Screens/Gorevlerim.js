import { Alert, ImageBackground, RefreshControl, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Styles/Gorevlerim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderButon from '../Components/Headers/HeaderButon';
import { useSelector } from 'react-redux';
import axios from 'axios';
import GorevKutu from '../Components/HelperComponents/GorevKutu';


const Gorevlerim = (props) => {
  const [refresh, setRefresh] = useState(false);

  const kullanici = useSelector(s => s.data);
  const [gorevler, setGorevler] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.43.215:3001/gorevlerim/${kullanici.id}`).then((response) => {
      setGorevler(response.data);

    });
    // console.log(gorevler);

  });
  function handleGorevEkle() {
    props.navigation.navigate('Görev Ekle');
  }
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }

  return (

    <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => pullMe}
        />
      }
    >
      <ImageBackground source={require('../Resimler/drawer.png')}
        style={{ width: undefined, height: 85 }}
      >
        <DurumCubugu />
        <HeaderButon baslik="Görevlerim" buton='Ekle' icon='alarm-add' onPress={handleGorevEkle} />
      </ImageBackground>
      <SafeAreaView style={styles.gorevlerim}>
        <View style={styles.kutuGrup}>
          {
            gorevler.map(
              gorev => {
                return (
                  <View key={gorev.id} style={styles.kutuGrupItem}>
                    <GorevKutu baslik={gorev.baslik} icerik={gorev.icerik}
                      tarih={(gorev.tarih).slice(0, 19).replace('T', ' ')}
                      onPress={() => props.navigation.navigate('Görev Detayı',
                        {
                          gorevId: gorev.id,
                          gorevBaslik: gorev.baslik,
                          gorevIcerik: gorev.icerik,
                          gorevTarih: gorev.tarih
                        })}
                      onLongPress={() => Alert.alert(
                        "Lütfen bir eylem seçiniz.",
                        "",
                        [
                          {
                            text: "Sil",
                            onPress: () => {
                              return Alert.alert(
                                "Görevi silmek üzeresiniz.",
                                "Görev silinsin mi?",
                                [
                                  {
                                    text: "Sil",
                                    onPress: () => {
                                      axios.delete(`http://192.168.43.215:3001/gorevlerim/${gorev.id}`);
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
                            text: "Düzenle",
                            onPress: () => props.navigation.navigate('Görev Detayı',
                              {
                                gorevId: gorev.id,
                                gorevBaslik: gorev.baslik,
                                gorevIcerik: gorev.icerik,
                              })
                          },
                          {
                            text: "İptal",
                          }
                        ]
                      )} />
                  </View>
                )
              }
            )
          }
        </View>
      </SafeAreaView>
    </ScrollView >
  )
}

export default Gorevlerim