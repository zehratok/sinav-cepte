import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, RefreshControl, ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import DurumCubugu from '../Components/DurumCubugu'
import Header from '../Components/Header'
import styles from '../Styles/Profil.style'

const Profil = () => {
    const data = useSelector(s => s.data);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    return (
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={() => pullMe}
                />
            }
        >
            <DurumCubugu />
            <ImageBackground source={require('../Resimler/drawer.png')}
                style={[styles.profil, { width: Dimensions.get('window').width, height: Dimensions.get('window').height }]}
            >
                <Header baslik="Profil" />

                <SafeAreaView style={styles.profil}>
                    {/* <Text style={styles.baslik}>Merhaba {data.adSoyad} </Text> */}
                    <View style={{ alignSelf: "center" }}>
                        <View style={styles.kutu}>

                        </View>
                        <View style={styles.profilResmi}>
                            <Image source={require('../Resimler/profil.png')}
                                style={styles.resim} />
                        </View>
                        <View style={styles.ekle}>
                            <TouchableOpacity>
                                <MaterialIcons name="add" size={30} color="white" style={{ fontWeight: "bold" }} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </SafeAreaView>
            </ImageBackground>
        </ScrollView >

    )
}

export default Profil

