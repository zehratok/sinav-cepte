import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../Styles/AnaSayfa.style'
import Kutu from '../Components/AnaSayfaComponent/Kutu';
import Kutu3 from '../Components/AnaSayfaComponent/Kutu3';
import Loading from '../Components/Loading'
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
import HeaderAnaSayfa from '../Components/AnaSayfaComponent/HeaderAnaSayfa';
import { StatusBar } from 'expo-status-bar';
const AnaSayfa = () => {

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
        <ScrollView style={styles.container}>

            <StatusBar animated={true}
                backgroundColor="#BE9FE1"
                barStyle="#BE9FE1"
                showHideTransition='slide'
            />
            <SafeAreaView style={styles.anaSayfa}>
                <HeaderAnaSayfa />

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

