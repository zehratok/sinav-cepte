import { View, Text, ImageBackground, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import styles from '../Styles/Hesaplamalar.style'
import Header from '../Components/Headers/Header'
import DurumCubugu from '../Components/DurumCubugu'
import { useState } from 'react'
import Kutu from '../Components/HelperComponents/MenuKutu'
import TimerKutu from '../Components/HelperComponents/TimerKutu'

const Hesaplamalar = () => {
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
      <SafeAreaView style={styles.sohbet}>
        <ImageBackground source={require('../Resimler/drawer.png')}
          style={{ width: undefined, height: 85 }}
        >
          <DurumCubugu />
          <Header baslik="Hesaplamalar" />
        </ImageBackground>
        <View style={styles.tek}>
          <ImageBackground source={require('../Resimler/hesapla.png')}
            style={styles.kutuResimTimer}
          >
            <View>
              <View style={styles.timer}>
                <Text style={styles.timerYazi}>LGS</Text>
                <TimerKutu until={24*60*60*346 + 60* 60* 23 + 60 * 26 + 13} />
              </View>
              <View style={styles.timer}>
                <Text style={styles.timerYazi}>MSÜ</Text>
                <TimerKutu until={24*60*60*277 + 60* 60* 0 + 60 * 13 + 13} />
              </View>
            </View>
            <View>
              <View style={styles.timer}>
                <Text style={styles.timerYazi}>YKS</Text>
                <TimerKutu until={24*60*60*360 + 60* 60* 0 + 60 * 23 + 54} />
              </View>
              <View style={styles.timer}>
                <Text style={styles.timerYazi}>DGS</Text>
                <TimerKutu until={24*60*60*10 + 60* 60* 23 + 60 * 26 + 13} />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.grup}>
          <ImageBackground source={require('../Resimler/hesapla.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>
              <Kutu to={{ screen: 'LGS Puan Hesaplama' }} icon='FontAwesome' name='calculator' baslik='LGS' baslik2='Puan Hesaplama' />
            </View>
          </ImageBackground>
          <ImageBackground source={require('../Resimler/hesapla.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>
              <Kutu to={{ screen: 'YKS Puan Hesaplama' }} icon='FontAwesome' name='calculator' baslik='YKS' baslik2='Puan Hesaplama' />
            </View>
          </ImageBackground>

        </View>
        <View style={styles.grup}>
          <ImageBackground source={require('../Resimler/hesapla.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>
              <Kutu to={{ screen: 'MSÜ Puan Hesaplama' }} icon='FontAwesome' name='calculator' baslik='MSÜ' baslik2='Puan Hesaplama' />
            </View>
          </ImageBackground>
          <ImageBackground source={require('../Resimler/hesapla.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>

              <Kutu to={{ screen: 'DGS Puan Hesaplama' }} icon='FontAwesome' name='calculator' baslik='DGS' baslik2='Puan Hesaplama' />
            </View>
          </ImageBackground>
        </View>


      </SafeAreaView>
    </ScrollView >
  )
}

export default Hesaplamalar