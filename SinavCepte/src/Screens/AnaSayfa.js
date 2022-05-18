import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../Styles/AnaSayfa.style'
import Kutu from '../Components/HelperComponents/AnaSayfaMenuKutu';
import Loading from '../Components/Loading';
import HeaderAnaSayfa from '../Components/Headers/HeaderAnaSayfa';
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import DurumCubugu from '../Components/DurumCubugu';


const AnaSayfa = () => {

    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }

    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });
    if (!fontsLoaded) {
        return <Loading />;
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
            <SafeAreaView style={styles.anaSayfa}>
                <HeaderAnaSayfa />
                <DurumCubugu />
                <View style={styles.grup}>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'Notlarım' }} icon='MaterialCommunity' name='notebook' baslik=' Notlarım ' />
                    </View>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'Görevlerim' }} icon='MaterialCommunity' name='calendar-clock' baslik=' Görevlerim ' />
                    </View>
                </View>
                <View style={styles.grup}>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'Soru Paylaşımı' }} icon='MaterialCommunity' name='sign-text' baslik=' Soru Paylaşımı ' />
                    </View>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'Sohbet' }} icon='MaterialCommunity' name='comment-text-multiple' baslik=' Sohbet ' />
                    </View>
                </View>
                <View style={styles.grup}>
                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'Konular' }} icon='MaterialCommunity' name='book-alphabet' baslik=' Konular ' />
                    </View>

                    <View style={styles.kutu}>
                        <Kutu to={{ screen: 'Çıkmış Sorular' }} icon='MaterialCommunity' name='lead-pencil' baslik=' Çıkmış Sorular ' />
                    </View>

                </View>

            </SafeAreaView>
        </ScrollView >
    )
}

export default AnaSayfa

