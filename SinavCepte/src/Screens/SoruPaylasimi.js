import { ImageBackground, RefreshControl, View } from 'react-native'
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

        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={() => pullMe}
                /> 
            }
        >
            <ImageBackground source={require('../Resimler/drawer.png')}
                style={{ width: undefined, height: 85 }}
            >
                <DurumCubugu />
                <HeaderButon baslik="Soru Paylaşımı" icon='file-upload' onPress={() => props.navigation.navigate("Soru Paylaş")} />
            </ImageBackground>
            <SafeAreaView style={styles.soruPaylasimi}>
                <View style={styles.grup}>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'LGS Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='LGS' baslik2='Soru Paylaşımı' />
                    </View>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'YKS Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='YKS'  baslik2='Soru Paylaşımı'/>
                    </View>

                </View>
                <View style={styles.grup}>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'MSÜ Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='MSÜ' baslik2='Soru Paylaşımı' />
                    </View>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'DGS Soru Paylaşımı' }} icon='FontAwesome' name='slideshare' baslik='DGS' baslik2='Soru Paylaşımı' />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default SoruPaylasim
