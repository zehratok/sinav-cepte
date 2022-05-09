import { Image, ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Font from '../Font';

const ProfilDrawer = () => {
    const data = useSelector(s => s.data);

    return (
        <View>
            <Font />
            <ImageBackground
                source={require('../../Resimler/drawer.png')}
                style={styles.profil}>
                <TouchableOpacity>
                    <Image source={require('../../Resimler/profil.png')}
                        style={styles.profilResmi} />
                </TouchableOpacity>
                <View style={styles.profilMetin}>
                    <Text style={styles.profilBaslik}> {data.adSoyad} </Text>
                    <Text style={styles.profilYazi}>bişey bişey</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ProfilDrawer

const styles = StyleSheet.create({
    profil: {
        marginTop: 20,
        padding: Dimensions.get('window').height / 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilResmi: {
        flex: 1,
        padding: Dimensions.get('window').height / 15,
        width: 10,
        height: 10
    },
    profilMetin: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginRight: Dimensions.get('window').width / 90,
        marginLeft: Dimensions.get('window').width / 90,
    },
    profilBaslik: {
        color: '#F1F1F6',
        fontSize: Dimensions.get('window').width / 20,
        fontFamily: 'Ubuntu_500Medium',
    },
    profilYazi: {
        color: '#F1F1F6',
        fontSize: Dimensions.get('window').width / 30,
        fontFamily: 'Ubuntu_400Regular'
    },
})