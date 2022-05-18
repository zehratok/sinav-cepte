import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HosGeldiniz from "../Screens/HosGeldiniz";
import Kayit from "../Screens/Kayit";
import Giris from "../Screens/Giris";
import Parola from "../Screens/Parola";
const Stack = createNativeStackNavigator();

const Baslangic = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Hoş Geldiniz" component={HosGeldiniz} />
            <Stack.Screen name="Kaydol" component={Kayit} />
            <Stack.Screen name="Giriş Yap" component={Giris} />
            <Stack.Screen name="Parolamı Unuttum" component={Parola} />
        </Stack.Navigator>
    )
}

export default Baslangic;