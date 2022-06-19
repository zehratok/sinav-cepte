import { RefreshControl, Text, StyleSheet, ImageBackground, View } from 'react-native'
import React, { useState } from 'react';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Headers/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Hakkimizda = () => {
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
            <SafeAreaView style={styles.hakkimizda}>
                <View
                    style={{ width: undefined, height: 60, backgroundColor: '#be9fe1' }}
                >
                    <Header baslik="Hakkımızda" />
                </View>
                <View style={styles.kutu}>
                    <ImageBackground source={require('../Resimler/hakkimizda.png')}
                        style={{ width: undefined, height: 500 }}
                    >
                        <View style={styles.yaziKutu}>
                            <Text style={styles.yazi}>Sınav Cepte mobil sınav asistanı uygulaması, </Text>
                            <Text style={styles.yazi}>Bilecik Şeyh Edebali Üniversitesi  </Text>
                            <Text style={styles.yazi}>Bilgisayar Mühendisliği programı, 3.sınıf öğrencisi </Text>
                            <Text style={styles.yaziH}> Zehra Tok tarafından  </Text>
                            <Text style={styles.yazi}> Tasarım Çalışması II dersi kapsamında hazırlandı.</Text>
                            <Text style={styles.yazi}> Bu projenin danışmanı olan saygıdeğer hocam</Text>
                            <Text style={styles.yaziH}> Sayın Prof. Dr. Uğur Yüzgeç'e </Text>
                            <Text style={styles.yazi}> tüm katkılarından ve hiç eksiltmediği desteğinden dolayı teşekkürlerimi sunarım.</Text>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Hakkimizda
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e8e4ec',
    },
    hakkimizda: {
        flex: 1
    },
    icon: {
        alignSelf: 'center',
        marginTop: 60,
    },
    kutu: {
        marginTop: 50,
        alignSelf: 'center',
        height: 500,
        width: 410,
        backgroundColor: '#e8e4ec'
    },
    yaziKutu: {
        alignSelf: 'center',
        marginTop: 65,
        height: 150,
        width: 320,
    },
    yazi: {
        fontFamily: 'Ubuntu_500Medium_Italic',
        alignSelf: 'center',
        fontSize: 14,
        color: '#7a6790'
    },
    yaziH: {
        fontFamily: 'Ubuntu_500Medium_Italic',
        alignSelf: 'center',
        fontSize: 15,
        color: '#5b4d6a'
    }
})
