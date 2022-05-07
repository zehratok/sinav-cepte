import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import Loading from './Loading';
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
const Header = ({ screen }) => {
    const navigation = useNavigation();
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
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="#BE9FE1" />
            </TouchableOpacity>
            <View>
                <Text style={headerStyles.text}>{screen}</Text>
            </View>
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 24,
        left: 0,
        width: '100%',
        backgroundColor: '#dcdce3',
        elevation: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    text: {
        left: 5,
        color: '#BE9FE1',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        bottom: 1,
    }
})