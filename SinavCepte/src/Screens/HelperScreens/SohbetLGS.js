import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../Styles/Sohbetler.style';
import MesajLGS from '../../Components/HelperComponents/MesajLGS';
import usePost from '../../Hooks/usePost';

const SohbetLGS = () => {
    const kullanici = useSelector(s => s.data);
    const { data, loading, error, post } = usePost();
    function handleMesajGonder(values) {
        if (!values.icerik) {
            return;
        }
        values.zaman = (values.zaman).slice(16, 24);
        //console.log(values.zaman);
        post("https://b4de-149-140-154-149.eu.ngrok.io/mesaj-lgs", values);
    }
    useEffect(() => {
        if (error || data == null) {
            return;
        }
        if (data.mesaj == "Hata") {
            Alert.alert('HATA!', 'Beklenmedik bir hata oluştu.');
        }
    }, [data])

    return (
        <ImageBackground source={require('../../Resimler/drawer.png')}
            style={[styles.sohbet, { width: undefined, height: undefined }]}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer} >
                    <MesajLGS />
                </View>
                <View style={styles.formik}>
                    <Formik
                        initialValues={{ kullanici_id: kullanici.id, kullanici_adi: kullanici.adSoyad, icerik: '', zaman: Date() }}
                        onSubmit={handleMesajGonder}
                        enableReinitialize={true}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <View style={styles.formGrup}>
                                <View style={styles.form}>
                                    <View style={styles.icerik}>
                                        <TextInput
                                            style={styles.icerikInput}
                                            placeholder="Mesaj yazmak için dokun"
                                            value={values.icerik}
                                            onChangeText={handleChange('icerik')}
                                            multiline={true}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                                    {loading ? (
                                        <ActivityIndicator color='white' />
                                    ) : (<Text>
                                        <MaterialCommunityIcons name="send-circle" size={50} color="#5b4d6a" />
                                    </Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SohbetLGS