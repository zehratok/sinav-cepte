import React, { useState } from 'react';
import { Alert, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import usePost from '../Hooks/usePost';
import Resim from '../Components/Resim';
import Buton from '../Components/Buton';
import Link from '../Components/Links';

import styles from '../Styles/Kayit.style';

const Kayit = (props) => {
    const { data, loading, error, post } = usePost();
    function handleKayit(values) {

        if (!values.adSoyad) {
            Alert.alert("HATA!", "Ad Soyad alanı boş bırakılamaz!");
            return;
        }
        if (!values.mail) {
            Alert.alert("HATA!", "E-posta adresi alanı boş bırakılamaz!");
            return;
        }
        if (!values.parola) {
            Alert.alert("HATA!", "Parola alanı boş bırakılamaz!");
            return;
        }
        if (values.parolaTekrar != values.parola) {
            Alert.alert("HATA!", "Parolayı kontrol ediniz.");
            return;
        }
        post("http://10.55.185.37:3001/kaydol", values);
        if (error || data == null) {
            Alert.alert("Beklenmedik bir hata oluştu.", "Tekrar deneyin.");
            return;
        }
        if (data.mesaj == "Çift kayıt hatası") {
            Alert.alert("HATA!", "Bu e-posta adresi zaten mevcut.");
            return;
        }
        if (data.mesaj == "Kayit işlemi başarılı") {
            Alert.alert("Kayıt Başarılı!", "Giriş yapabilirsiniz.");
            props.navigation.navigate('Giriş Yap');
        }
    }
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.kayit}>
                <Resim kaynak={require('../Resimler/kayit.png')} />
                <Formik
                    initialValues={{ adSoyad: '', mail: '', parola: '', parolaTekrar: '' }}
                    onSubmit={handleKayit}
                    enableReinitialize={true}
                >
                    {({ handleSubmit, handleChange, values }) => (
                        <View>
                            <View style={styles.form}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Ad Soyad"
                                    value={values.adSoyad}
                                    onChangeText={handleChange('adSoyad')}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-posta adresi"
                                    value={values.mail}
                                    onChangeText={handleChange('mail')}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Parola"
                                    value={values.parola}
                                    onChangeText={handleChange('parola')}
                                    secureTextEntry={true}
                                />
                                <TextInput
                                    style={styles.inputSon}
                                    placeholder="Parola Tekrar"
                                    value={values.parolaTekrar}
                                    onChangeText={handleChange('parolaTekrar')}
                                    secureTextEntry={true}
                                />
                            </View>
                            <Buton text='KAYDOL'
                                onPress={handleSubmit}
                                loading={loading} />
                        </View>
                    )}
                </Formik>
                <Link to={{ screen: 'Giriş Yap' }}
                    text="Hesabın mı var? Giriş Yap."
                />
            </SafeAreaView>
        </ScrollView >
    )
}

export default Kayit;