import { Alert, ImageBackground, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../Styles/Gorev.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker'
import usePut from '../../Hooks/usePut'


const GorevDetay = (props) => {
    const kullanici = useSelector(s => s.data);
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    const { gorevId, gorevBaslik, gorevIcerik, gorevTarih } = props.route.params;
    const { data, loading, error, put } = usePut();
    const [baslik, setBaslik] = useState(gorevBaslik);
    const [icerik, setIcerik] = useState(gorevIcerik);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState(gorevTarih);

    const handleTarihSec = (event, selectedDate) => {
        const currentDate = selectedDate || gorevTarih;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '.' + (tempDate.getMonth() + 1) + '.' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + '.' + tempDate.getMinutes();
        setText(fDate + '  -  ' + fTime)

        console.log(fDate + ' (' + fTime + ')');
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    useEffect(() => {
        setBaslik(gorevBaslik);
        setIcerik(gorevIcerik);

    }, []);
    function handleGorevGuncelle(values) {
        if ((values.baslik == null) && (values.icerik == null) && (values.tarih == null)) {
            Alert.alert("UYARI!", "Başlık ve içerik bilgisi boş bırakılamaz!");
            return;
        }

        put(`https://b4de-149-140-154-149.eu.ngrok.io/gorev-guncelle/${gorevId}`, values);
        console.log(values);

    } useEffect(() => {
        if (error || data == null) {
            return;
        }
        if (data.mesaj == "Hata") {
            Alert.alert('HATA', 'Beklenmedik bir hata oluştu.');
        }
        if (data.mesaj == "Güncelleme işlemi başarılı") {
            Alert.alert('Görev başarıyla güncellendi.');
            props.navigation.navigate('Görevlerim');
        }
    }, [data])
    return (
        <ImageBackground source={require('../../Resimler/drawerr.png')}
            style={[styles.gorevDetay, { width: undefined, height: undefined }]}
        >
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => pullMe}
                    />
                }
            >
                <SafeAreaView style={styles.gorevDetay}>
                    <Formik
                        initialValues={{ kullanici_id: kullanici.id, baslik: baslik, icerik: icerik, tarih: date }}
                        onSubmit={handleGorevGuncelle}
                        enableReinitialize={true}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <View>
                                <View style={styles.form}>
                                    <View style={styles.baslik}>
                                        <TextInput
                                            style={styles.baslikInput}
                                            placeholder={gorevBaslik}
                                            defaultValue={baslik}
                                            value={baslik}
                                            onChangeText={setBaslik}
                                            multiline={true}
                                        />
                                    </View>
                                    <View style={styles.icerik} >
                                        <TextInput
                                            multiline={true}
                                            style={styles.icerikInput}
                                            placeholder={gorevIcerik}
                                            defaultValue={icerik}
                                            value={icerik}
                                            onChangeText={setIcerik}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.dateText}>{(text).slice(0, 19).replace('T', ' ')}</Text>
                                        <View style={styles.date}>
                                            <View>
                                                <TouchableOpacity style={styles.dateButon} onPress={() => showMode('date')} >
                                                    <Text style={styles.dateButonText}>Tarih</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View >
                                                <TouchableOpacity style={styles.dateButon} onPress={() => showMode('time')}>
                                                    <Text style={styles.dateButonText}>Saat</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        {
                                            show && (
                                                <DateTimePicker
                                                    testID='dateTimePicker'
                                                    value={values.tarih}
                                                    mode={mode}
                                                    is24Hour={true}
                                                    display='default'
                                                    onChange={handleTarihSec}
                                                />)}
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                                    <Text style={styles.butonText}>GÜNCELLE</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground >
    )
}

export default GorevDetay