import { Dimensions, ImageBackground, RefreshControl, Text, View } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/Notlarim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotKutu from '../Components/HelperComponents/NotKutu';
import HeaderButon from '../Components/Headers/HeaderButon';
import NotlarimItems from '../Constants/NotlarimItems';

const Notlarim = (props) => {
  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }
  function handleNotEkle() {
    props.navigation.navigate('Not Ekle')
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
              NotlarimItems.map(
                notlar =>
                  <View style={styles.kutuGrupItem}>
                    <NotKutu baslik={notlar.baslik} icerik={notlar.icerik} />
                  </View>
              )
            }
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>

  )
}

export default Notlarim