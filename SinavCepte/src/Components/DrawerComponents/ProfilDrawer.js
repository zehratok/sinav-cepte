import { Image, ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
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
import { Link } from '@react-navigation/native';
const ProfilDrawer = () => {
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
        <View>
            <ImageBackground
                source={require('../../Resimler/drawer.png')}
                style={styles.profil}>
                <TouchableOpacity>
                    <Link to={{ screen: 'Stack' }} style={styles.profilResmi}>
                        <Image source={require('../../Resimler/profil.png')}
                            style={styles.resim} />
                    </Link>
                </TouchableOpacity>
                <View style={styles.profilMetin}>
                    <Text style={styles.profilBaslik}> {data.adSoyad} </Text>
                    <Text style={styles.profilYazi}>
                        <Ionicons name="star-half" size={15} color="white" />
                        Ulaşabileceğini hissettiğin her şey sana aittir.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ProfilDrawer

const styles = StyleSheet.create({
    profil: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilResmi: {
        marginTop: -(Dimensions.get('window').height / 13),
        marginBottom: Dimensions.get('window').height / 30,
        paddingVertical: Dimensions.get('window').height / 15,
    },
    resim: {
        flex: 1,
        alignSelf: 'center',
        padding: Dimensions.get('window').height / 15,
        width: 100,
        height: 100,

    },
    profilMetin: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginRight: Dimensions.get('window').width / 90,
        marginLeft: Dimensions.get('window').width / 90,
    },
    profilBaslik: {
        marginTop: 10,
        color: '#F1F1F6',
        fontSize: Dimensions.get('window').width / 20,
        fontFamily: 'Ubuntu_500Medium',
    },
    profilYazi: {
        marginTop: 10,
        marginRight: 10,
        color: '#F1F1F6',
        fontSize: Dimensions.get('window').width / 30,
        fontFamily: 'Ubuntu_300Light_Italic',
    },
})