import { Text } from 'react-native'
import React from 'react';
import styles from '../Styles/Notlarim.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notlarim = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.deneme}>
        <DurumCubugu />
        <Text style={styles.baslik}>Notlarım  </Text>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Notlarim