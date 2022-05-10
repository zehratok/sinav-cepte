import { Text } from 'react-native'
import React from 'react';
import styles from '../Styles/SoruPaylasimi.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';
const SoruPaylasim = () => {

    return (
        <ScrollView style={styles.container}>
            <DurumCubugu />
            <Header baslik="Soru Paylaşımı" />
            <SafeAreaView style={styles.deneme}>
                <Text style={styles.baslik}> SoruPaylasim  </Text>
            </SafeAreaView>
        </ScrollView>
    )
}
export default SoruPaylasim
