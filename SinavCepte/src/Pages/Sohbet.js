import { Text } from 'react-native'
import React from 'react';
import styles from '../Styles/Sohbet.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';

const Sohbet = () => {
    return (
        <ScrollView style={styles.container}>
            <DurumCubugu />
            <Header baslik="Sohbet" />
            <SafeAreaView style={styles.deneme}>
                <Text style={styles.baslik}> Sohbet  </Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Sohbet