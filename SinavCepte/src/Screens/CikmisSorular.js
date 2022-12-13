import { ImageBackground, RefreshControl, View } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/CikmisSorular.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Headers/Header';
import Kutu from '../Components/HelperComponents/MenuKutu';

const CikmisSorular = () => {
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
        <Header baslik="Çıkmış Sorular" />
      </ImageBackground>
      <SafeAreaView style={styles.deneme}>
        <View style={styles.grup}>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Çıkmış Sorular' }} icon='FontAwesome5' name='spell-check' baslik2='LGS' />
          </View>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Çıkmış Sorular' }} icon='FontAwesome5' name='spell-check' baslik2='YKS' />
          </View>

        </View>
        <View style={styles.grup}>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Çıkmış Sorular' }} icon='FontAwesome5' name='spell-check' baslik2='MSÜ' />
          </View>
          <View style={styles.kutu}>
            <Kutu to={{ screen: 'Çıkmış Sorular' }} icon='FontAwesome5' name='spell-check' baslik2='DGS' />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default CikmisSorular