import Loading from './Loading'
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
import React from 'react'

const Font = () => {
    const font = () => {
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
    }
    return (
        font
    )
}
export default Font;