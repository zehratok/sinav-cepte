import { View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../Styles/Sorular.style';
import Liste from '../../Components/HelperComponents/SorularListe';
import Font from '../../Components/Font';
import { Feather } from '@expo/vector-icons';

const SoruDGS = (props) => {
  const [icerik, setIcerik] = useState(null);
  function handleOnPress() {
  }

  return (
    <ImageBackground source={require('../../Resimler/drawerr.png')}
      style={[styles.soru, { width: undefined, height: undefined }]} >
      <SafeAreaView>
        <View style={styles.aramaCubugu}>
          <Font />
          <TextInput
            style={styles.input}
            placeholder='Ders ara'
            onChangeText={setIcerik}
            value={icerik}
          />
          <TouchableOpacity style={styles.buton}>
            <Feather name="search" size={24} color="#5b4d6a" />
          </TouchableOpacity>
        </View>
        <Liste navigation={props.navigation} sinav={4} ders={icerik} />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default SoruDGS