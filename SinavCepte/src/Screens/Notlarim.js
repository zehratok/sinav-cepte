import { Alert, ImageBackground, RefreshControl, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Styles/Notlarim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotKutu from '../Components/HelperComponents/NotKutu';
import HeaderButon from '../Components/Headers/HeaderButon';
import { useSelector } from 'react-redux';
import axios from 'axios';
import usePost from '../Hooks/usePost';

const Notlarim = (props) => {
  const { data, loading, error, post } = usePost();
  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }
  const kullanici = useSelector(s => s.data);
  const [notlar, setNotlar] = useState([]);

  useEffect(() => {
    axios.get(`https://b4de-149-140-154-149.eu.ngrok.io/notlarim/${kullanici.id}`).then((response) => {
      setNotlar(response.data);

    });
    // console.log(notlar);
  });
  // useEffect(() => {
  //   return () => {
  //     setNotlar(null);
  //     console.log("Bellek temizlendi.");
  //   }
  // }, []);
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
        <HeaderButon baslik="Notlarım" buton='Ekle' icon='add' onPress={() => props.navigation.navigate('Not Ekle')} />
      </ImageBackground>
      <SafeAreaView style={styles.notlarim}>
        <View style={styles.kutuGrup}>
          {
            notlar.map(
              not => {
                return (
                  <View key={not.id} style={styles.kutuGrupItem}>
                    <NotKutu baslik={not.baslik} icerik={not.icerik}
                      onPress={() => props.navigation.navigate('Not Detayı',
                        {
                          notId: not.id,
                          notBaslik: not.baslik,
                          notIcerik: not.icerik,
                        })}
                      onLongPress={() => Alert.alert(
                        "Lütfen bir eylem seçiniz.",
                        "",
                        [
                          {
                            text: "Sil",
                            onPress: () => {
                              return Alert.alert(
                                "Notu silmek üzeresiniz.",
                                "Not silinsin mi?",
                                [
                                  {
                                    text: "Sil",
                                    onPress: () => {
                                      axios.delete(`https://b4de-149-140-154-149.eu.ngrok.io/notlarim/${not.id}`);

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
                            onPress: () => props.navigation.navigate('Not Detayı',
                              {
                                notId: not.id,
                                notBaslik: not.baslik,
                                notIcerik: not.icerik,
                              })
                          },
                          {
                            text: "İptal",
                          }
                        ]
                      )
                      } />
                  </View>
                )
              }
            )
          }
        </View>
      </SafeAreaView>
    </ScrollView>

  )
}

export default Notlarim