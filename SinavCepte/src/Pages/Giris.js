import React, { useState, useEffect } from 'react';
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Resim from '../Components/Resim';
import Link from '../Components/Links';
import { ActivityIndicator } from 'react-native-paper';
import usePost from '../Hooks/usePost';
import { useDispatch } from 'react-redux';

import styles from '../Styles/Giris.style';
import Buton from '../Components/Buton';

const Giris = () => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();
    const [mail, setMail] = useState('');
    const [parola, setParola] = useState('');

    const handleSubmit = async () => {
        if (!mail && !parola) {
            Alert.alert("HATA!", "Bilgiler boş bırakılamaz!");
            return;
        }
        if (!mail) {
            Alert.alert("HATA!", "E-posta adresi alanı boş bırakılamaz!");
            return;
        }
        if (!parola) {
            Alert.alert("HATA!", "Parola boş bırakılamaz!");
            return;
        }
        const kullanici = {
            mail: mail,
            parola: parola,
        };
        post("http://10.55.184.62:3001/giris-yap", kullanici);
        console.log(data);
        if (error || data == null) {
            Alert.alert("Üzgünüz", "Beklenmedik bir hata oluştu.");
            return;
        }
        if (data == "Hatalı giriş") {
            Alert.alert("HATA!", "Yanlış e-posta adresi veya parola.");
            return;
        }
        else {
            //Alert.alert("HOŞ GELDİNİZ!", "Giriş Başarılı.")
            dispatch({ type: 'SET_USER', payload: { data } })
        }
    }
    
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.giris}>
                <Resim kaynak={require('../Resimler/giris.png')} />
                <View>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="E-posta adresi"
                            onChangeText={setMail}
                        />
                        <TextInput
                            style={styles.inputSon}
                            placeholder="Parola"
                            onChangeText={setParola}
                        />
                    </View >
                    <View style={styles.parolaLink}>
                        <Link to={{ screen: 'Parolanı Sıfırla' }} text='Parolanı mı unuttun?' />
                    </View>
                    <Buton text='GİRİŞ YAP' onPress={handleSubmit} />
                </View >
                <Link to={{ screen: 'Kaydol' }}
                    text=' Hesabın yok mu? Yeni bir hesap oluştur.' />
            </SafeAreaView >
        </ScrollView >
    )
}

export default Giris;

