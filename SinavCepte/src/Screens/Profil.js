import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, RefreshControl, ScrollView, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Buton from '../Components/Buton'
import DurumCubugu from '../Components/DurumCubugu'
import HeaderBack from '../Components/Headers/HeaderBack'
import usePost from '../Hooks/usePost'
import styles from '../Styles/Profil.style'

const Profil = () => {
    const data = useSelector(s => s.data);
    const { loading, error, post } = usePost();
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    function handleProfil(values) {

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
                <HeaderBack baslik="Profil" />

                <SafeAreaView style={styles.profil}>
                    <View style={{ alignSelf: "center" }}>
                        <View style={styles.kutu}>
                            <Formik
                                initialValues={{ adSoyad: '', mail: '', parola: '', parolaTekrar: '' }}
                                onSubmit={handleProfil}
                                enableReinitialize={true}
                            >
                                {({ handleSubmit, handleChange, values }) => (
                                    <View style={styles.formContainer}>
                                        <View style={styles.form}>
                                            <View style={styles.inputGrup} >
                                                <FontAwesome5 name="user-alt" size={22} color="black" style={styles.icon} />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder={data.adSoyad}
                                                    value={values.adSoyad}
                                                    onChangeText={handleChange('adSoyad')}
                                                />
                                            </View>
                                            <View style={styles.inputGrup} >
                                                <MaterialIcons name="email" size={22} color="black" style={styles.icon} />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder={data.email}
                                                    value={values.mail}
                                                    onChangeText={handleChange('mail')}
                                                />
                                            </View>
                                            <View style={styles.inputGrup} >
                                                <MaterialIcons name="vpn-key" size={22} color="black" style={styles.icon} />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Parola"
                                                    value={values.parola}
                                                    onChangeText={handleChange('parola')}
                                                    secureTextEntry={true}
                                                />
                                            </View>
                                            <View style={styles.inputGrup} >
                                                <MaterialIcons name="vpn-key" size={22} color="black" style={styles.icon} />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Parola Tekrar"
                                                    value={values.parolaTekrar}
                                                    onChangeText={handleChange('parolaTekrar')}
                                                    secureTextEntry={true}
                                                />
                                            </View>

                                        </View>
                                        <Buton text='KAYDET'
                                            onPress={handleSubmit}
                                            loading={loading} />
                                    </View>
                                )}
                            </Formik>
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
            </ImageBackground >
        </ScrollView >

    )
}

export default Profil

