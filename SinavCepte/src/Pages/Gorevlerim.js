import { RefreshControl, Text } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/Gorevlerim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';

const Gorevlerim = () => {
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
      <DurumCubugu />
      <Header baslik="Görevlerim" />
      <SafeAreaView style={styles.deneme}>
        <Text style={styles.baslik}>Görevlerim  </Text>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Gorevlerim