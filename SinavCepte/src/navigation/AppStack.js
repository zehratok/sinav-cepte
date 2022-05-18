import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profil from '../Screens/Profil';
const Stack = createNativeStackNavigator();

const Baslangic = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profil" component={Profil} />
        </Stack.Navigator>
    )
}

export default Baslangic;