import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profil from '../Pages/Profil';
import Ayarlar from '../Pages/Ayarlar';
const Stack = createNativeStackNavigator();

const Baslangic = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profil" component={Profil} />
        </Stack.Navigator>
    )
}

export default Baslangic;