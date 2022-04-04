import React, { useState } from 'react';
import { Alert, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import usePost from '../Hooks/usePost';
import Resim from '../Components/Resim';
import Buton from '../Components/Buton';
import Link from '../Components/Links';

import styles from '../Styles/Kayit.style';


const Kayit = (props) => {
    const { data, loading, error, post } = usePost();
    const [adSoyad, setAdSoyad] = useState('');
    const [mail, setMail] = useState('');
    const [parola, setParola] = useState('');
    const [parolaTekrar, setParolaTekrar] = useState('');

    function handleSubmit() {
        if (!adSoyad && !mail && !parola && !parolaTekrar) {
            Alert.alert("HATA!", "Bilgiler boş bırakılamaz!");
            return;
        }
        if (!adSoyad) {
            Alert.alert("HATA!", "Ad Soyad alanı boş bırakılamaz!");
            return;
        }
        if (!mail) {
            Alert.alert("HATA!", "E-posta adresi alanı boş bırakılamaz!");
            return;
        }
        if (!parola) {
            Alert.alert("HATA!", "Parola alanı boş bırakılamaz!");
            return;
        }
        if (parolaTekrar != parola) {
            Alert.alert("HATA!", "Parolayı kontrol ediniz.");
            return;
        }
        const kullanici = {
            adSoyad: adSoyad,
            mail: mail,
            parola: parola,
        };
        post("http://10.55.184.62:3001/kaydol", kullanici);
        console.log(data);
        if (error) {
            Alert.alert("Beklenmedik bir hata oluştu.", "Tekrar deneyiniz.");
        }
        if (null) {
            Alert.prompt("Beklenmedik bir hata oluştu.");
            return;
        }
        if (data == null) {
            Alert.alert("Beklenmedik bir hata oluştu.", "Tekrar deneyiniz.");
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
                <View>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Ad Soyad"
                            onChangeText={setAdSoyad}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="E-posta adresi"
                            onChangeText={setMail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Parola"
                            onChangeText={setParola}
                        />
                        <TextInput
                            style={styles.inputSon}
                            placeholder="Parola Tekrar"
                            onChangeText={setParolaTekrar}
                        />
                    </View>
                    <Buton text='KAYDOL' onPress={handleSubmit} loading={loading} />
                </View>
                <Link to={{ screen: 'Giriş Yap' }}
                    text="Hesabın mı var? Giriş Yap."
                />
            </SafeAreaView>
        </ScrollView >
    )
}

export default Kayit;
