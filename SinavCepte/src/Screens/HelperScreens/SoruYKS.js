import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../Styles/Sorular.style';
const SoruYKS = (props) => {
  return (
    <ImageBackground source={require('../../Resimler/drawer.png')}
      style={[styles.soru, { width: undefined, height: undefined }]} >
      <SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default SoruYKS