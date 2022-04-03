import React, { useState, useEffect } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native-paper';
import { Link } from '@react-navigation/native';
import usePost from '../Hooks/usePost';
import { useDispatch } from 'react-redux'

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
                <Image
                    source={require('../Resimler/giris.png')}
                    style={styles.resim}
                />
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
                        <Link to={{ screen: 'Parolanı Sıfırla' }} style={styles.parolaLink}>
                            Parolanı mı unuttun?
                        </Link>
                    </View>
                    <TouchableOpacity
                        style={styles.buton}
                        onPress={handleSubmit}
                        loading={loading}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color='white' />
                        ) : (
                            <Text style={styles.butonYazi}>GİRİŞ YAP</Text>
                        )}
                    </TouchableOpacity>

                </View >
                <View>
                    <Link to={{ screen: 'Kaydol' }} style={styles.link}>
                        Hesabın yok mu? Yeni bir hesap oluştur.
                    </Link>

                </View>
            </SafeAreaView >
        </ScrollView >
    )
}

export default Giris;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    giris: {
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
    parolaLink: {
        alignItems: 'flex-end',
        textAlign: 'right',
        color: '#E1CCEC',
        marginTop: 4,
        marginBottom: 7,
        fontSize: 13,
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