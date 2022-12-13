import { ActivityIndicator, Alert, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import usePost from '../../Hooks/usePost'
import * as ImagePicker from 'expo-image-picker';

const CevapGonder = (props) => {

    const [date, setDate] = useState(new Date());
    const kullanici = useSelector(s => s.data);
    const { data, loading, error, post } = usePost();
    const [image, setImage] = useState('');
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(image);
        }
    }
    function handleCevapla(values) {
        if (!values.icerik) {
            Alert.alert("UYARI!", "Soruyu cevaplamak için içerik giriniz!");
            return;
        }
        post("https://b4de-149-140-154-149.eu.ngrok.io/cevapla", values);
    }
    useEffect(() => {
        if (error || data == null) {
            return;
        }
        if (data.mesaj == "Hata") {
            Alert.alert('HATA!', 'Beklenmedik bir hata oluştu.');
        }
        if (data.mesaj == "Kayit işlemi başarılı") {
            Alert.alert('Soruyu cevapladınız!');
        }
    }, [data])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.cevapla}>
                    <Formik
                        initialValues={{ soru_id: props.soruId, kullanici_id: kullanici.id, kullanici_adi: kullanici.adSoyad, icerik: '', resim: image, tarih: date }}
                        onSubmit={handleCevapla}
                        enableReinitialize={true}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <View style={styles.formGrup}>
                                <View style={styles.form}>
                                    <View style={styles.icerik}>
                                        <TextInput
                                            style={styles.icerikInput}
                                            placeholder="Cevaplamak için dokun"
                                            value={values.icerik}
                                            onChangeText={handleChange('icerik')}
                                            multiline={true}
                                        />
                                    </View>
                                    <View style={styles.resim}>
                                        <TouchableOpacity onPress={pickImage}>
                                            <MaterialCommunityIcons name="image-plus" size={40} color="#be9fe1" />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                                    {loading ? (
                                        <ActivityIndicator color='white' />
                                    ) : (<Text style={styles.textButon}>Gönder</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CevapGonder

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: '#e8e4ec',
    },
    cevapla: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    form: {
        borderRadius: 5,
        minHeight: 50,
        maxHeight: (Dimensions.get('window').height / 2) - 10,
        backgroundColor: 'white',
        width: (Dimensions.get('window').width / 2) + 40,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resim: {
        height: 50,
        width: 50,

    },
    buton: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#5b4d6a',
        height: 40,
        marginBottom: 15,
    },
    textButon: {
        marginHorizontal: 10,
        marginVertical: 10,
        color: 'white',
        fontFamily: 'Ubuntu_500Medium'
    },
    icerik: {
        color: '#c0b5cb',
        marginLeft: 10,
    },
    icerikInput: {
        color: '#5b4d6a',
        fontSize: 14,
        fontFamily: 'Ubuntu_500Medium_Italic',
        minHeight: 50,
        minWidth: 175,
        maxWidth: 175

    },
    formik: {
        height: 80,
        justifyContent: 'space-between',
    },
    formGrup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})