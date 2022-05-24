import { Dimensions, ImageBackground, RefreshControl, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Styles/Notlarim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotKutu from '../Components/HelperComponents/NotKutu';
import HeaderButon from '../Components/Headers/HeaderButon';
import NotlarimItems from '../Constants/NotlarimItems';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Notlarim = (props) => {
  const [refresh, setRefresh] = useState(false);

  const kullanici = useSelector(s => s.data);
  const [notlar, setNotlar] = useState([]);

  useEffect(() => {
    axios.get(`http://10.55.185.3:3001/notlarim/${kullanici.id}`).then((response) => {
      setNotlar(response.data);

    });
    // console.log(notlar);

  }, []);


  function handleNotEkle() {
    props.navigation.navigate('Not Ekle')
  }
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }

  return (
    <ImageBackground source={require('../Resimler/drawer.png')}
      style={[styles.notlarim, { width: undefined, height: undefined }]}
    >
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => pullMe}
          />
        }
      >
        <DurumCubugu />
        <HeaderButon baslik="Notlarım" buton='Ekle' icon='add' onPress={handleNotEkle} />

        <SafeAreaView style={styles.notlarim}>
          <View style={styles.kutuGrup}>
            {
              notlar.map(
                not => {
                  return (
                    <View key={not.id} style={styles.kutuGrupItem}>
                      <NotKutu baslik={not.baslik} icerik={not.icerik} />
                    </View>
                  )
                }
              )
            }
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>

  )
}

export default Notlarim