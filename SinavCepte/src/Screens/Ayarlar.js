import { Alert, Image, RefreshControl, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Styles/Ayarlar.style';
import DurumCubugu from '../Components/DurumCubugu';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Headers/Header';
import { useSelector } from 'react-redux';
import usePut from '../Hooks/usePut';
import { Formik } from 'formik';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Buton from '../Components/Buton';
import * as ImagePicker from 'expo-image-picker';


const Ayarlar = () => {
  const veri = useSelector(s => s.data);
  const { data, loading, error, put } = usePut();
  const [ad, setAd] = useState(veri.adSoyad);
  const [mail, setMail] = useState(veri.email);
  const [parola, setParola] = useState(veri.parola);
  const [parolat, setParolat] = useState(veri.parola);
  const id = veri.id;
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
  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }
  function handleGuncelle(values) {
    if (values.parola != values.parolaTekrar) {
      Alert.alert("UYARI!", "Parolayı kontrol ediniz.");
      return;
    }
    if (!values.mevcutParola) {
      Alert.alert('UYARI!', 'Bilgilerinizi güncellemek için mevcut parolanızı giriniz!');
      return;
    }
    if (values.mevcutParola != veri.parola) {
      Alert.alert("UYARI!", "Mevcut parolanızı kontrol ediniz.");
      return;
    }

    put(`https://b4de-149-140-154-149.eu.ngrok.io/kullanici-guncelle/${id}`, values);

  }
  useEffect(() => {
    console.log(data);
    if (error || data == null) {
      return;
    }
    if (data.mesaj == "Çift kayıt hatası") {
      Alert.alert("HATA!", "Bu e-posta adresi zaten mevcut.");
      return;
    }
    if (data.mesaj == "Kayit işlemi başarılı") {
      Alert.alert("Güncelleme Başarılı!", "Bilgileriniz başarıyla güncellendi!");
    }
  }, [data])
  return (
    <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => pullMe}
        />
      }
    >
      <SafeAreaView style={styles.ayarlar}>
        <View
          style={{ width: undefined, height: 60, backgroundColor: '#be9fe1' }}
        >
          <Header baslik="Ayarlar" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.kutu}>
            <Formik
              initialValues={{ id: veri.id, adSoyad: ad, mail: mail, mevcutParola: '', parola: parola, parolaTekrar: parolat }}
              onSubmit={handleGuncelle}
              enableReinitialize={true}
            >
              {({ handleSubmit, handleChange, values }) => (
                <View style={styles.formContainer}>
                  <View style={styles.form}>
                    <View style={styles.inputGrup} >
                      <FontAwesome5 name="user-alt" size={22} style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder={ad}
                        defaultValue={veri.adSoyad}
                        value={ad}
                        onChangeText={setAd}
                      />
                    </View>
                    <View style={styles.inputGrup} >
                      <MaterialIcons name="email" size={22} style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder={mail}
                        defaultValue={veri.email}
                        value={mail}
                        onChangeText={setMail}
                      />
                    </View>
                    <View style={styles.inputGrup} >
                      <MaterialCommunityIcons name="account-key" size={24} style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder="Mevcut parola"
                        value={values.mevcutParola}
                        onChangeText={handleChange('mevcutParola')}
                        secureTextEntry={true}
                      />
                    </View>
                    <View style={styles.inputGrup} >
                      <MaterialIcons name="vpn-key" size={22} style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder={parola}
                        value={parola}
                        onChangeText={setParola}
                        secureTextEntry={true}
                      />
                    </View>
                    <View style={styles.inputGrup} >
                      <MaterialIcons name="vpn-key" size={22} style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder={parolat}
                        value={parolat}
                        onChangeText={setParolat}
                        secureTextEntry={true}
                      />
                    </View>
                  </View>
                  <View style={styles.buton}>
                    <TouchableOpacity onPress={handleSubmit} loading={loading}>
                      <Text style={styles.butonText}>Bilgilerimi Güncelle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.profilResmi}>
            <Image source={require('../Resimler/profil.png')}
              style={styles.resim} />
          </View>
          <View style={styles.ekle}>
            <TouchableOpacity onPress={pickImage}>
              <MaterialIcons name="add" size={30} color="white" style={{ fontWeight: "bold" }} />
            </TouchableOpacity>
          </View>
          <View style={styles.nokta1}></View>
          <View style={styles.nokta2}></View>
          <View style={styles.nokta3}></View>
          <View style={styles.nokta4}></View>
          <View style={styles.nokta5}></View>
          <View style={styles.nokta6}></View>


        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Ayarlar