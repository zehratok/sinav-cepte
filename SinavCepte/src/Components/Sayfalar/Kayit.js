import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Kayit = () => {
    

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
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="E-posta adresi"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Parola"
                        />
                        <TextInput
                            style={styles.inputSon}
                            placeholder="Parola Tekrar"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buton}
                    // onPress={onPressKayit}
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

export default Kayit

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