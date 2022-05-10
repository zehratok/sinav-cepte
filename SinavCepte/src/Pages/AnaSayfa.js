import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DurumCubugu from '../Components/DurumCubugu';
import styles from '../Styles/AnaSayfa.style'
import Kutu1 from '../Components/AnaSayfaComponent/Kutu1';
import Kutu2 from '../Components/AnaSayfaComponent/Kutu2';
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
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
const AnaSayfa = () => {
    const data = useSelector(s => s.data);

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
                <DurumCubugu />

            <Header baslik={data.adSoyad} />
            <SafeAreaView style={styles.anaSayfa}>
                <Kutu1 />
                <View style={styles.box2}>
                    <Kutu2 icon='MaterialCommunity' name='notebook' baslik=' Notlarım ' />
                    <Kutu2 icon='MaterialCommunity' name='calendar-clock' baslik=' Görevlerim ' />
                </View>
                <View style={styles.box2}>
                    <Kutu2 icon='MaterialCommunity' name='sign-text' baslik=' Soru Paylaşımı ' />
                    <Kutu2 icon='MaterialCommunity' name='comment-text-multiple' baslik=' Sohbet ' />
                </View>
                <View style={styles.box2}>
                    <Kutu2 icon='MaterialCommunity' name='book-alphabet' baslik=' Konular ' />
                    <Kutu2 icon='MaterialCommunity' name='lead-pencil' baslik=' Çıkmış Sorular ' />
                </View>
            </SafeAreaView>
        </ScrollView >
    )
}

export default AnaSayfa

