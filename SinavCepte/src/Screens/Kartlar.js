import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Styles/Kartlar.style'
import DurumCubugu from '../Components/DurumCubugu'
import Header from '../Components/Headers/Header'
import Kutu from '../Components/HelperComponents/MenuKutu'

const Kartlar = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={require('../Resimler/drawer.png')}
        style={{ width: undefined, height: 85 }}
      >
        <DurumCubugu />
        <Header baslik="Kartlar" />
      </ImageBackground>
      <View>
        <View style={styles.grup}>
          <ImageBackground source={require('../Resimler/kart.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>
              <Kutu to={{ screen: 'Kartlar' }} baslik='LGS' />
            </View>
          </ImageBackground>
          <ImageBackground source={require('../Resimler/kart.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>
              <Kutu to={{ screen: 'Kartlar' }} baslik='YKS' />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.grup}>
          <ImageBackground source={require('../Resimler/kart.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>
              <Kutu to={{ screen: 'Kartlar' }} baslik='MSÜ' />
            </View>
          </ImageBackground>
          <ImageBackground source={require('../Resimler/kart.png')}
            style={styles.kutuResim}
          >
            <View style={styles.kutu}>

              <Kutu to={{ screen: 'Kartlar' }} baslik='DGS' />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.grup}>
          <TouchableOpacity>

            <ImageBackground source={require('../Resimler/ortakKart.png')}
              style={styles.kutuResim}
            >
              <View style={styles.kutu}>
                <Kutu to={{ screen: 'Kartlar' }} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground source={require('../Resimler/kartKey.png')}
              style={styles.kutuResim}
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Kartlar