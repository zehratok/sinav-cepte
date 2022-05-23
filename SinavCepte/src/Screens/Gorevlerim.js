import { ImageBackground, RefreshControl, Text, View } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/Gorevlerim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderButon from '../Components/Headers/HeaderButon';

const Gorevlerim = (props) => {
  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }
  function handleGorevEkle() {
    props.navigation.navigate('Görev Ekle');
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
        <HeaderButon baslik="Görevlerim" buton='Ekle' icon='alarm-add' onPress={handleGorevEkle} />
        <SafeAreaView style={styles.gorevlerim}>
          <View style={styles.deneme}></View>

        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  )
}

export default Gorevlerim