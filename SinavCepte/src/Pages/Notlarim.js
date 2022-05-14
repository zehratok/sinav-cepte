import { Dimensions, ImageBackground, RefreshControl, Text, View } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/Notlarim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Kutu from '../Components/NotlarimComponent/Kutu';
import HeaderButon from '../Components/EkleComponent/HeaderButon';

const Notlarim = () => {
  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }
  function handleNotEkle() {

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
        style={[styles.notlarim, { width: undefined, height: undefined }]}
      >
        <DurumCubugu />
        <HeaderButon baslik="Notlarım" buton='Ekle' icon='add' onPress={handleNotEkle} />

        <SafeAreaView style={styles.notlarim}>

          

          <View style={styles.deneme}></View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  )
}

export default Notlarim