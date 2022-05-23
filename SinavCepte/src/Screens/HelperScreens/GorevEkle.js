import { View, Text, TouchableOpacity, ImageBackground, RefreshControl, Alert, ScrollView, TextInput, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../Styles/GorevEkle.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import usePost from '../../Hooks/usePost';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useSelector } from 'react-redux'

const GorevEkle = (props) => {
  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }
  const kullanici = useSelector(s => s.data);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Tarih-Zaman seçiniz: ');

  const hello = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = 'Tarih:  ' + tempDate.getDate() + '.' + (tempDate.getMonth() + 1) + '.' + tempDate.getFullYear();
    let fTime = 'Saat:  ' + tempDate.getHours() + '.' + tempDate.getMinutes();
    setText(fDate + '  -  ' + fTime)

    console.log(fDate + ' (' + fTime + ')');
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const { data, loading, error, post } = usePost();
  function handleGorevEkle(values) {
    if (!values.baslik && !values.icerik) {
      Alert.alert("HATA!", "Not eklemek için içerik giriniz!");
      return;
    }
    if (values.tarih == null) {
      Alert.alert("HATA!", "Tarih ve zaman seçilmedi.");
      return;
    }
    console.log(values);
    post("http://10.55.185.3:3001/gorev-ekle", values);

  }

  useEffect(() => {
    if (error || data == null) {
      return;
    }
    if (data.mesaj == "Hata") {
      Alert.alert('HATA', 'Beklenmedik bir hata oluştu.');
    }
    if (data.mesaj == "Kayit işlemi başarılı") {
      Alert.alert('Görev başarıyla kaydedildi.');
      props.navigation.navigate('Görevlerim');
    }
  }, [data])

  return (
    <ImageBackground source={require('../../Resimler/drawerr.png')}
      style={[styles.notEkle, { width: undefined, height: undefined }]}
    >
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => pullMe}
          />
        }
      >
        <SafeAreaView style={styles.notEkle}>
          <Formik
            initialValues={{ kullanici_id: kullanici.id, baslik: '', icerik: '', tarih: date }}
            onSubmit={handleGorevEkle}
            enableReinitialize={true}
          >
            {({ handleSubmit, handleChange, values }) => (
              <View>
                <View style={styles.form}>
                  <View style={styles.baslik}>
                    <TextInput
                      style={styles.baslikInput}
                      placeholder="Başlık giriniz..."
                      value={values.baslik}
                      onChangeText={handleChange('baslik')}
                    />
                  </View>
                  <View style={styles.icerik} >
                    <TextInput
                      multiline={true}
                      style={styles.icerikInput}
                      placeholder="Notunuzu buraya yazınız..."
                      value={values.icerik}
                      onChangeText={handleChange('icerik')}
                    />
                  </View>
                  <View>
                    <Text style={styles.dateText}>{text}</Text>
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
                          onChange={hello}
                        />)}

                  </View>

                </View>
                <TouchableOpacity style={styles.buton} onPress={handleSubmit}>
                  <Text style={styles.butonText}>KAYDET</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground >
  )
}

export default GorevEkle