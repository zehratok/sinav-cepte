import { ImageBackground, RefreshControl, Text, View } from 'react-native'
import React, { useState } from 'react';
import styles from '../Styles/SoruPaylasimi.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderButon from '../Components/Headers/HeaderButon';
import Kutu from '../Components/HelperComponents/MenuKutu';

const SoruPaylasim = (props) => {
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    return (
        <ImageBackground source={require('../Resimler/drawer.png')}
            style={[styles.soruPaylasimi, { width: undefined, height: undefined }]}
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
                <HeaderButon baslik="Soru Paylaşımı" icon='share' onPress={() => props.navigation.navigate("Soru Paylaş")} />
                <SafeAreaView style={styles.soruPaylasimi}>
                <View style={styles.grup}>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'LGS Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='          LGS          Soru Paylaşımı ' />
                        </View>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'YKS Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='          YKS          Soru Paylaşımı ' />
                        </View>

                    </View>
                    <View style={styles.grup}>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'MSÜ Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='          MSÜ          Soru Paylaşımı ' />
                        </View>
                        <View style={styles.kutu}>
                            <Kutu to={{ screen: 'DGS Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='          DGS          Soru Paylaşımı ' />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    )
}
export default SoruPaylasim
