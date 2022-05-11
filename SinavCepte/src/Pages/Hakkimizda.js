import { Text } from 'react-native'
import React from 'react';
import styles from '../Styles/Hakkimizda.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';

const Hakkimizda = () => {
    return (
        <ScrollView style={styles.container}>
            <DurumCubugu />
            <Header baslik="Hakkimizda" />
            <SafeAreaView style={styles.deneme}>
                <Text style={styles.baslik}>Hakkimizda  </Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Hakkimizda