import { ImageBackground, RefreshControl, View } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/Konular.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Headers/Header';
import Kutu from '../Components/HelperComponents/MenuKutu';

const Konular = () => {
  const [refresh, setRefresh] = useState(false);
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
        <Header baslik="Konular" />
      </ImageBackground>
      <SafeAreaView style={styles.konular}>
        <View style={styles.grup}>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Konular' }} icon='Entypo' name='open-book' baslik='LGS' baslik2='Konu Takibi' />
          </View>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Konular' }} icon='Entypo' name='open-book' baslik='YKS' baslik2='Konu Takibi' />
          </View>

        </View>
        <View style={styles.grup}>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Konular' }} icon='Entypo' name='open-book' baslik='MSÜ' baslik2='Konu Takibi' />
          </View>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Konular' }} icon='Entypo' name='open-book' baslik='DGS' baslik2='Konu Takibi' />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Konular