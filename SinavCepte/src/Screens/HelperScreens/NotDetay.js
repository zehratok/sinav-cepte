import { ActivityIndicator, Alert, ImageBackground, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../Styles/Not.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import usePut from '../../Hooks/usePut'
import axios from 'axios'


const NotDetay = (props) => {
    const kullanici = useSelector(s => s.data);
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    const { notId, notBaslik, notIcerik } = props.route.params;
    const [baslik, setBaslik] = useState(notBaslik);
    const [icerik, setIcerik] = useState(notIcerik);
    const { data, loading, error, put } = usePut();
    useEffect(() => {
        setBaslik(notBaslik);
        setIcerik(notIcerik);

    }, []);
    function handleNotGuncelle(values) {
        if ((values.baslik == null) && (values.icerik == null)) {
            Alert.alert("UYARI!", "Başlık ve içerik bilgisi boş bırakılamaz!");
            return;
        }
       
        put(`https://b4de-149-140-154-149.eu.ngrok.io/not-guncelle/${notId}`, values);
        //  console.log(values);

    } useEffect(() => {
        console.log(data);
        if (error || data == null) {
            return;
        }
        if (data.mesaj == "Hata") {
            Alert.alert('HATA', 'Beklenmedik bir hata oluştu.');
        }
        if (data.mesaj == "Güncelleme işlemi başarılı") {
            Alert.alert('Not başarıyla güncellendi.');
            props.navigation.navigate('Notlarım');
        }
    }, [data])

    return (
        <ImageBackground source={require('../../Resimler/drawerr.png')}
            style={[styles.notDetay, { width: undefined, height: undefined }]}
        >
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => pullMe}
                    />
                }
            >
                <SafeAreaView style={styles.notDetay}>
                    <Formik
                        initialValues={{ id: notId, kullanici_id: kullanici.id, baslik: baslik, icerik: icerik }}
                        onSubmit={handleNotGuncelle}
                        enableReinitialize={true}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <View>
                                <View style={styles.form}>
                                    <View style={styles.baslik}>
                                        <TextInput
                                            style={styles.baslikInput}
                                            multiline={true}
                                            defaultValue={baslik}
                                            placeholder="Başlık eklemek için dokunun"
                                            value={baslik}
                                            onChangeText={setBaslik}
                                        />

                                    </View>
                                    <View style={styles.icerik} >
                                        <TextInput
                                            multiline={true}
                                            style={styles.icerikInput}
                                            defaultValue={icerik}
                                            placeholder="İçerik eklemek için dokunun"
                                            value={icerik}
                                            onChangeText={setIcerik}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                                    {loading ? (
                                        <ActivityIndicator color='white' />
                                    ) : (
                                        <Text style={styles.butonText}>GÜNCELLE</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground >
    )
}

export default NotDetay;