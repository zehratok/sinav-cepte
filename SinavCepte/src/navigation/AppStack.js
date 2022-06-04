import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnaSayfa from "../Screens/AnaSayfa";
import Profil from '../Screens/Profil';
import GorevEkle from '../Screens/HelperScreens/GorevEkle';
import NotEkle from '../Screens/HelperScreens/NotEkle';
import AppDrawer from "./AppDrawer";
import {
    useFonts,
    Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import Loading from "../Components/Loading";
import NotDetay from "../Screens/HelperScreens/NotDetay";

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
                <Stack.Screen name="Görev Ekle" component={GorevEkle} />
                <Stack.Screen name="Not Ekle" component={NotEkle} />
                <Stack.Screen name="Not Detayı" component={NotDetay} />
            </Stack.Group>

        </Stack.Navigator >
    )
}

export default Baslangic;