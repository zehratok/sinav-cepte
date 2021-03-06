import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loading from "../Components/Loading";
import AnaSayfa from "../Screens/AnaSayfa";
import Profil from '../Screens/Profil';
import GorevEkle from '../Screens/HelperScreens/GorevEkle';
import NotEkle from '../Screens/HelperScreens/NotEkle';
import NotDetay from "../Screens/HelperScreens/NotDetay";
import GorevDetay from '../Screens/HelperScreens/GorevDetay';
import SoruEkle from '../Screens/HelperScreens/SoruEkle';
import SohbetYKS from '../Screens/HelperScreens/SohbetYKS';
import SohbetLGS from '../Screens/HelperScreens/SohbetLGS';
import SohbetDGS from '../Screens/HelperScreens/SohbetDGS';
import SohbetMSU from '../Screens/HelperScreens/SohbetMSU';
import SoruYKS from '../Screens/HelperScreens/SoruYKS';
import SoruLGS from '../Screens/HelperScreens/SoruLGS';
import SoruMSU from '../Screens/HelperScreens/SoruMSU';
import SoruDGS from '../Screens/HelperScreens/SoruDGS';

import AppDrawer from "./AppDrawer";
import {
    useFonts,
    Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import SoruDetay from "../Screens/HelperScreens/SoruDetay";
import ResimDetay from "../Screens/HelperScreens/ResimDetay";

const Stack = createNativeStackNavigator();

const Baslangic = () => {
    let [fontsLoaded] = useFonts({
        Ubuntu_700Bold,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AppDrawer" component={AppDrawer} />
                <Stack.Screen name="AnaSayfa" component={AnaSayfa} />
            </Stack.Group>
            <Stack.Group screenOptions={{
                headerStyle: {
                    backgroundColor: '#BE9FE1',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 22,
                    fontFamily: 'Ubuntu_700Bold'
                }
            }}>
                <Stack.Screen name="Profil" component={Profil} />
                <Stack.Screen name="G??rev Ekle" component={GorevEkle} />
                <Stack.Screen name="Not Ekle" component={NotEkle} />
                <Stack.Screen name="G??rev Detay??" component={GorevDetay} />
                <Stack.Screen name="Not Detay??" component={NotDetay} />
                <Stack.Screen name="Soru Payla??" component={SoruEkle} />
                <Stack.Screen name="YKS Sohbet" component={SohbetYKS} />
                <Stack.Screen name="LGS Sohbet" component={SohbetLGS} />
                <Stack.Screen name="MS?? Sohbet" component={SohbetMSU} />
                <Stack.Screen name="DGS Sohbet" component={SohbetDGS} />
                <Stack.Screen name="DGS Soru Payla????m??" component={SoruDGS} />
                <Stack.Screen name="YKS Soru Payla????m??" component={SoruYKS} />
                <Stack.Screen name="LGS Soru Payla????m??" component={SoruLGS} />
                <Stack.Screen name="MS?? Soru Payla????m??" component={SoruMSU} />
                <Stack.Screen name="Soru Detay??" component={SoruDetay} />
                <Stack.Screen name="Resim Detay??" component={ResimDetay} />

            </Stack.Group>

        </Stack.Navigator >
    )
}

export default Baslangic;