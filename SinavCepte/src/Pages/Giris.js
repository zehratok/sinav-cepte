import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, TextInput, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Resim from '../Components/Resim';
import Link from '../Components/Links';
import usePost from '../Hooks/usePost';
import { useDispatch } from 'react-redux';

import styles from '../Styles/Giris.style';
import Buton from '../Components/Buton';
import { Formik } from 'formik';

const Giris = () => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();

    function handleGiris(values) {
        if (!values.mail) {
            Alert.alert("HATA!", "E-posta adresi alanı boş bırakılamaz!");
            return;
        }
        if (!values.parola) {
            Alert.alert("HATA!", "Parola alanı boş bırakılamaz!");
            return;
        }
        post("http://10.55.185.37:3001/giris-yap", values);

        if (error || data == null) {
            Alert.alert("Beklenmedik bir hata oluştu.", "Tekrar deneyin.");
            return;
        }
        if (data == "Hatalı giriş") {
            Alert.alert("HATA!", "Yanlış e-posta adresi veya parola.");
            return;
        }
        else {
            Alert.alert("HOŞ GELDİNİZ!", "Giriş Başarılı.")
            dispatch({ type: 'SET_USER', payload: { data } })
        }
    }

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.giris}>
                <Resim kaynak={require('../Resimler/giris.png')} />

                <Formik initialValues={{ mail: '', parola: '' }}
                    onSubmit={handleGiris}>
                    {({ handleSubmit, handleChange, values }) => (
                        <View>
                            <View style={styles.form}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-posta adresi"
                                    values={values.mail}
                                    onChangeText={handleChange('mail')}
                                />
                                <TextInput
                                    style={styles.inputSon}
                                    placeholder="Parola"
                                    values={values.parola}
                                    onChangeText={handleChange('parola')}
                                    secureTextEntry={true}
                                />
                            </View >
                            <View style={styles.parolaLink}>
                                <Link to={{ screen: 'Parolanı Sıfırla' }} text='Parolanı mı unuttun?' />
                            </View>
                            <Buton text='GİRİŞ YAP'
                                onPress={handleSubmit}
                                loading={loading} />
                        </View >
                    )}
                </Formik>
                <Link to={{ screen: 'Kaydol' }}
                    text=' Hesabın yok mu? Yeni bir hesap oluştur.' />
            </SafeAreaView >
        </ScrollView >
    )
}

export default Giris;

