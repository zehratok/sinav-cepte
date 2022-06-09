import { ActivityIndicator, Alert, ImageBackground, RefreshControl, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react';
import styles from '../Styles/Sohbet.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Headers/Header';
import Kutu from '../Components/HelperComponents/MenuKutu';

const Sohbet = () => {
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    return (
        <ImageBackground source={require('../Resimler/drawer.png')}
            style={[styles.sohbet, { width: undefined, height: undefined }]}
        >
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => pullMe}
                    />
                }
            >
                <DurumCubugu />
                <Header baslik="Sohbet" />
                <SafeAreaView style={styles.sohbet}>
                    <View style={styles.grup}>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'LGS Sohbet' }} icon='FontAwesome' name='group' baslik=' LGS Sohbet ' />
                        </View>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'YKS Sohbet' }} icon='Entypo' name='chat' baslik=' YKS Sohbet ' />
                        </View>

                    </View>
                    <View style={styles.grup}>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'MSÜ Sohbet' }} icon='FontAwesome5' name='envelope-open-text' baslik=' MSÜ Sohbet ' />
                        </View>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'DGS Sohbet' }} icon='MaterialCommunity' name='thought-bubble' baslik=' DGS Sohbet ' />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    )
}

export default Sohbet