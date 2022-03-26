import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
const Kayit = (props) => {
    const [adSoyad, setAdSoyad] = useState('');
    const [mail, setMail] = useState('');
    const [parola, setParola] = useState('');
    const [parolaTekrar, setParolaTekrar] = useState('');
    function handleSubmit() {
        if (!adSoyad || !mail || !parola || !parolaTekrar) {
            Alert.alert("HATA!", "Bilgiler boş bırakılamaz!");
            return;
        }
        if (parolaTekrar != parola) {
            Alert.alert("HATA!", "Parolayı kontrol ediniz.");
            return;
        }
        if (parolaTekrar == parola && adSoyad && mail && parola && parolaTekrar) {
            Alert.alert("Kayıt Başarılı!");
        }
        const kullanici = {
            adSoyad: adSoyad,
            mail: mail,
            parola: parola,
        };
        // console.log(kullanici);
        axios.post("http://10.55.184.98:3001/kaydol", kullanici )
            .then(response => console.log(response))
            .catch(error => console.log(error));

        //props.navigation.navigate('Profil', { kullanici });
    }


    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.kayit}>
                <Image
                    style={styles.resim}
                    source={require('../../Resimler/kayit.png')}
                />
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
                    <TouchableOpacity
                        style={styles.buton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.butonYazi}>KAYDOL</Text>
                    </TouchableOpacity>
                </View>
                <Link to={{ screen: 'Giriş Yap' }} style={styles.link}>
                    Hesabın mı var? Giriş Yap.
                </Link>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Kayit;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    kayit: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    resim: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 3,
        alignContent: 'center',
    },
    form: {
        backgroundColor: 'white',
        borderColor: '#F1F1F6',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        height: 60,
        width: 300,
        borderWidth: 1,
        borderBottomColor: '#F1F1F6',
        padding: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        fontSize: 17,
    },
    inputSon: {
        height: 60,
        width: 300,
        padding: 10,
        fontSize: 17,
    },
    buton: {
        backgroundColor: '#BE9FE1',
        height: 50,
        padding: 12,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    butonYazi: {
        color: 'white',
        fontSize: 17,
    },
    link: {
        color: '#E1CCEC',
        fontSize: 13,
    },
})