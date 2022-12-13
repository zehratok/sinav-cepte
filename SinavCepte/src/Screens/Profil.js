import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Dimensions, Image, ImageBackground, RefreshControl, ScrollView, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Buton from '../Components/Buton'
import usePost from '../Hooks/usePost'
import styles from '../Styles/Profil.style'

const Profil = () => {
    const kullanici = useSelector(s => s.data);
    const id = kullanici.id;
    const [profil, setProfil] = useState([]);

    useEffect(() => {
        axios.get(`https://b4de-149-140-154-149.eu.ngrok.io/kullanicilar/${id}`).then((response) => {
            setProfil(response.data);

        });
        // console.log(notlar);
    });
    // useEffect(() => {
    //     return () => {
    //         setProfil(null);
    //         console.log("Bellek temizlendi.");
    //     }
    // }, []);
    return (
        <ImageBackground source={require('../Resimler/drawer.png')}
            style={[styles.profil, { width: Dimensions.get('window').width, height: Dimensions.get('window').height }]}
        >
            <SafeAreaView style={styles.profil}>
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.kutu}>
                        <View style={styles.formContainer}>
                            <View style={styles.form}>
                                {
                                    profil.map(
                                        prof => {
                                            return (
                                                <View key={prof.id}>
                                                    <View style={styles.inputGrup} >
                                                        <FontAwesome5 name="user-alt" size={25} style={styles.icon} />
                                                        <Text style={styles.yazi}>{prof.adSoyad}</Text>
                                                    </View>
                                                    <View style={styles.inputGrup} >
                                                        <MaterialIcons name="email" size={25} style={styles.icon} />
                                                        <Text style={styles.yazi}>{prof.mail}</Text>
                                                    </View>
                                                </View>

                                            )
                                        }
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.profilResmi}>
                            <Image source={require('../Resimler/profil.png')}
                                style={styles.resim} />
                        </View>
                        <View style={styles.nokta1}></View>
                        <View style={styles.nokta2}></View>
                        <View style={styles.nokta3}></View>
                        <View style={styles.nokta4}></View>
                        <View style={styles.nokta5}></View>
                        <View style={styles.nokta6}></View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground >

    )
}

export default Profil

