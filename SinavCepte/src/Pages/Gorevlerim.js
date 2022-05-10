import { Text } from 'react-native'
import React from 'react';
import styles from '../Styles/Gorevlerim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';

const Gorevlerim = () => {
  return (
    <ScrollView style={styles.container}>
      <DurumCubugu />
      <Header baslik="Görevlerim" />
      <SafeAreaView style={styles.deneme}>
        <Text style={styles.baslik}>Görevlerim  </Text>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Gorevlerim