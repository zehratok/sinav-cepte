import { RefreshControl, Text } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/Ayarlar.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Ayarlar = () => {
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
      <SafeAreaView style={styles.deneme}>
        <DurumCubugu />
        <Text style={styles.baslik}>Ayarlar  </Text>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Ayarlar