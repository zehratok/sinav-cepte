import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Kayit from './Kayit';

const HosGeldiniz = (props) => {
    function kayitRouter() {
        props.navigation.navigate('Kaydol');
    }
    function girisRouter() {
        props.navigation.navigate('Giriş Yap');
    }
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.hosgeldiniz}>
                <Text style={styles.baslik}>Sınav Cepte'ye</Text>
                <Text style={styles.baslik}>Hoş Geldiniz</Text>
                    <Image
                        source={require('../../Resimler/hosgeldiniz.png')}
                        style={styles.resim}
                    />
                <View style={styles.butonFlex}>
                    <TouchableOpacity
                        style={styles.buton}
                        onPress={kayitRouter}
                    >
                        <Text style={styles.butonYazi}>KAYDOL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buton}
                        onPress={girisRouter}
                    >
                        <Text style={styles.butonYazi}>GİRİŞ YAP</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default HosGeldiniz;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',

    },
    hosgeldiniz: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    baslik: {
        marginLeft: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#BE9FE1',
    },
    resim: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        resizeMode: "contain",
    },
    butonFlex: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buton: {
        backgroundColor: '#BE9FE1',
        width: 150,
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
})