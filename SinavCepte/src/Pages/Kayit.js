import React, { useState } from 'react';
import usePost from '../Hooks/usePost';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ActivityIndicator,
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
                <Image
                    style={styles.resim}
                    source={require('../Resimler/kayit.png')}
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
                        loading={loading}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color='white' />
                        ) : (
                            <Text style={styles.butonYazi}>KAYDOL</Text>
                        )}
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