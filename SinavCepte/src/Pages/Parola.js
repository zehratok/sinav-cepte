import React from 'react'
import { Alert, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Resim from '../Components/Resim';
import Buton from '../Components/Buton';
import Link from '../Components/Links';

import styles from '../Styles/Parola.style';

const Parola = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.parola}>
                <Resim kaynak={require('../Resimler/parola.png')} />
                <View>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="E-posta adresi"
                        />
                    </View>
                    <Buton onPress={() => Alert.alert('HATA!', '"Parolamı unuttum" şu anda kullanılamıyor.')} text='PAROLAMI UNUTTUM' />
                </View>
                <Link to={{ screen: 'Kaydol' }} text='Hesabın yok mu? Yeni bir hesap oluştur.' />
            </SafeAreaView>
        </ScrollView>
    )
}
export default Parola;