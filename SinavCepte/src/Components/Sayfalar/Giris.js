import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Giris = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.giris}>
                <Image
                    source={require('../../Resimler/giris.png')}
                    style={styles.resim}
                />
                <View>
                    <View style={styles.form}>

                        <TextInput
                            style={styles.input}
                            placeholder="E-posta adresi"
                        />
                        <TextInput
                            style={styles.inputSon}
                            placeholder="Parola"
                        />
                    </View>
                    <View style={styles.parolaLink}>
                        <Link to={{ screen: 'Parolanı Sıfırla' }} style={styles.parolaLink}>
                            Parolanı mı unuttun?
                        </Link>
                    </View>
                    <TouchableOpacity
                        style={styles.buton}
                    // onPress={onPressGiris}
                    >
                        <Text style={styles.butonYazi}>GİRİŞ YAP</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Link to={{ screen: 'Kaydol' }} style={styles.link}>
                        Hesabın yok mu? Yeni bir hesap oluştur.
                    </Link>
                </View>
            </SafeAreaView>
        </ScrollView>
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