import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButonCift from '../Components/ButonCift';
import DurumCubugu from '../Components/DurumCubugu';
import Resim from '../Components/Resim';
import styles from '../Styles/HosGeldiniz.style';
import Loading from '../Components/Loading';
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

const HosGeldiniz = (props) => {
    function kayitRouter() {
        props.navigation.navigate('Kaydol');
    }
    function girisRouter() {
        props.navigation.navigate('Giriş Yap');
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
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.hosgeldiniz}>
                <DurumCubugu />
                <Text style={styles.baslik}> Hoş Geldiniz </Text>
                <Resim kaynak={require('../Resimler/hosgeldiniz.png')} />
                <View style={styles.buton}>
                    <ButonCift text="KAYDOL" onPress={kayitRouter} />
                    <ButonCift text="GİRİŞ YAP" onPress={girisRouter} />
                </View>
            </SafeAreaView>
        </ScrollView >
    )
}

export default HosGeldiniz;