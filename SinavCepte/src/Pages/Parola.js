import React from 'react'
import { Alert, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Resim from '../Components/Resim';
import Buton from '../Components/Buton';
import Link from '../Components/Links';
import Font from '../Components/Font';
import styles from '../Styles/Parola.style';
import DurumCubugu from '../Components/DurumCubugu';

const Parola = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.parola}>
                <Font />
                <DurumCubugu />
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