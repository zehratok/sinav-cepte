import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Parola = (navigation) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.parola}>
                <Image
                    source={require('../../Resimler/parola.png')}
                    style={styles.resim}
                />
                <View>
                    <View style={styles.form}>

                        <TextInput
                            style={styles.input}
                            placeholder="E-posta adresi"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buton}
                    // onPress={onPressGiris}
                    >
                        <Text style={styles.butonYazi}>PAROLAMI UNUTTUM</Text>
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
export default Parola;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    parola: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    resim: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 3.5,
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