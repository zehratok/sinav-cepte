import { View, Text, TouchableOpacity, ImageBackground, RefreshControl, Alert, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../Styles/NotEkle.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import usePost from '../../Hooks/usePost'
import { useSelector } from 'react-redux'

const NotEkle = (props) => {
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    const kullanici = useSelector(s => s.data);
    const { data, loading, error, post } = usePost();
    function handleNotEkle(values) {
        if (!values.baslik && !values.icerik) {
            Alert.alert("HATA!", "Not eklemek için içerik giriniz!");
            return;
        }
        post("http://10.55.185.3:3001/not-ekle", values);
    }
    
    useEffect(() => {
        console.log(data);
        if (error || data == null) {
            return;
        }
        if (data.mesaj == "Kayit işlemi başarılı") {
            Alert.alert('Notunuz başarıyla kaydedildi.');
            props.navigation.navigate('Notlarım');
        }
    }, [data])

    return (
        <ImageBackground source={require('../../Resimler/drawerr.png')}
            style={[styles.notEkle, { width: undefined, height: undefined }]}
        >
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => pullMe}
                    />
                }
            >
                <SafeAreaView style={styles.notEkle}>
                    <Formik
                        initialValues={{ kullanici_id: kullanici.id, baslik: '', icerik: '' }}
                        onSubmit={handleNotEkle}
                        enableReinitialize={true}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <View>
                                <View style={styles.form}>
                                    <View style={styles.baslik}>
                                        <TextInput
                                            style={styles.baslikInput}
                                            placeholder="Başlık giriniz..."
                                            value={values.baslik}
                                            onChangeText={handleChange('baslik')}
                                        />
                                    </View>
                                    <View style={styles.icerik} >
                                        <TextInput
                                            style={styles.icerikInput}
                                            placeholder="Notunuzu buraya yazınız..."
                                            value={values.icerik}
                                            onChangeText={handleChange('icerik')}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                                    <Text style={styles.butonText}>KAYDET</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground >
    )
}

export default NotEkle