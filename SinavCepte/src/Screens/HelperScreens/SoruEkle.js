import { View, Text, TouchableOpacity, ImageBackground, RefreshControl, Alert, ScrollView, TextInput, ActivityIndicator, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../Styles/SoruEkle.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import usePost from '../../Hooks/usePost'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

const SoruEkle = (props) => {

    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState('');
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(image);
        }
    }
    const sinav = [
        { id: 1, value: 'LGS' },
        { id: 2, value: 'YKS' },
        { id: 3, value: 'MSÜ' },
        { id: 4, value: 'DGS' },
    ];
    const ders = [
        { id: 1, value: 'Matematik' },
        { id: 2, value: 'Fen B.' },
        { id: 3, value: 'Sosyal B.' },
        { id: 4, value: 'Türkçe' },
    ];
    const [sinavSecenek, setSinavSecenek] = useState(null);
    const [dersSecenek, setDersSecenek] = useState(null);

    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    const kullanici = useSelector(s => s.data);
    const { data, loading, error, post } = usePost();
    function handleSoruEkle(values) {
        if (!values.resim) {
            Alert.alert("UYARI!", "Soru paylaşmak için resim seçiniz!");
            return;
        }
        if (!values.sinav) {
            Alert.alert("UYARI!", "Soru paylaşmak için sınav grubu seçiniz!");
            return;
        }
        if (!values.ders) {
            Alert.alert("UYARI!", "Soru paylaşmak için ders seçiniz!");
            return;
        }
        if (!values.konu) {
            Alert.alert("UYARI!", "Soru paylaşmak için konu giriniz!");
            return;
        }
        if (!values.baslik && !values.aciklama) {
            Alert.alert("UYARI!", "Soru paylaşmak için içerik giriniz!");
            return;
        }
        console.log(values);

        post("https://b4de-149-140-154-149.eu.ngrok.io/soru-paylas", values);
    }

    useEffect(() => {
        if (error || data == null) {
            return;
        }
        if (data.mesaj == "Hata") {
            Alert.alert('HATA!', 'Beklenmedik bir hata oluştu.');
        }
        if (data.mesaj == "Kayit işlemi başarılı") {
            Alert.alert('Notunuz başarıyla kaydedildi.');
            props.navigation.navigate('Soru Paylaşımı');
        }
    }, [data])


    return (
        <ImageBackground source={require('../../Resimler/drawerr.png')}
            style={[styles.soruEkle, { width: undefined, height: undefined }]}
        >
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => pullMe}
                    />
                }
            >
                <SafeAreaView style={styles.soruEkle}>
                    <Formik
                        initialValues={{ kullanici_id: kullanici.id, kullanici_adi: kullanici.adSoyad, resim: image, sinav: sinavSecenek, ders: dersSecenek, konu: '', baslik: '', aciklama: '', tarih: date }}
                        onSubmit={handleSoruEkle}
                        enableReinitialize={true}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <View>
                                <View style={styles.form}>
                                    <View style={styles.grup}>

                                        <View style={styles.radioButton}>
                                            {sinav.map((item) => {
                                                return (
                                                    <View key={item.id} style={styles.radioButton}>
                                                        <Pressable
                                                            style={styles.radioButton}
                                                            onPress={() => setSinavSecenek(item.id)}>
                                                            <View style={
                                                                item.id === sinavSecenek ? styles.selected : styles.unselected
                                                            }></View>
                                                            <Text style={
                                                                item.id === sinavSecenek ? styles.selectedText : styles.unselectedText
                                                            }>{item.value}</Text>
                                                        </Pressable>
                                                    </View>)
                                            })}
                                        </View>


                                        <View style={styles.resim}>
                                            <TouchableOpacity onPress={pickImage}>
                                                <MaterialCommunityIcons name="image-plus" size={40} color="#be9fe1" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.radioButton}>
                                        {ders.map((item) => {
                                            return (
                                                <View key={item.id} style={styles.radioButton}>
                                                    <Pressable
                                                        style={styles.radioButton}
                                                        onPress={() => setDersSecenek(item.id)}>
                                                        <View style={
                                                            item.id === dersSecenek ? styles.selected : styles.unselected
                                                        }></View>
                                                        <Text style={
                                                            item.id === dersSecenek ? styles.selectedText : styles.unselectedText
                                                        }>{item.value}</Text>
                                                    </Pressable>
                                                </View>)
                                        })}
                                    </View>
                                    <View style={styles.konu}>
                                        <TextInput
                                            style={styles.konuInput}
                                            placeholder="Konu"
                                            value={values.konu}
                                            onChangeText={handleChange('konu')}
                                        />
                                    </View>
                                    <View style={styles.baslik}>
                                        <TextInput
                                            style={styles.baslikInput}
                                            placeholder="Başlık"
                                            value={values.baslik}
                                            onChangeText={handleChange('baslik')}
                                        />
                                    </View>
                                    <View style={styles.aciklama} >
                                        <TextInput
                                            style={styles.aciklamaInput}
                                            placeholder="Açıklama girmek için dokun"
                                            value={values.aciklama}
                                            onChangeText={handleChange('aciklama')}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                                    {loading ? (
                                        <ActivityIndicator color='white' />
                                    ) : (<Text style={styles.butonText}>PAYLAŞ</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                    <View style={styles.radio}>
                        <Text style={styles.paragraph}> </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground >
    )
}

export default SoruEkle