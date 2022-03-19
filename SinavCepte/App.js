import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

function HosGeldiniz({ navigation }) {
  return (
    <View style={styles.hosgeldiniz}>
      <Text style={styles.baslik}>Sınav Cepte'ye</Text>
      <Text style={styles.baslik}>Hoş Geldiniz</Text>
      <View style={styles.resim}>
        <Image
          source={require('./src/Resimler/hosgeldiniz.png')}
          style={styles.hosgeldinizResim}
        />
      </View>
      <View style={styles.butonlar}>
        <TouchableOpacity
          style={styles.altButon}
          onPress={() => navigation.navigate('Kaydol')}
        >
          <Text style={styles.butonIsim}>KAYDOL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.altButon}
          onPress={() => navigation.navigate('Giriş Yap')}
        >
          <Text style={styles.butonIsim}>GİRİŞ YAP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Kayit({ navigation }) {

  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.kayitGirisParola}>

      <Image
        source={require('./src/Resimler/kayit.png')}
        style={styles.kayitResim}
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
          <Text style={styles.butonIsim}>KAYDOL</Text>
        </TouchableOpacity>
      </View>
      <Link to={{ screen: 'Giriş Yap' }} style={styles.link}>
        Hesabın mı var? Giriş Yap.
      </Link>
    </View>
  )
}

function Giris({ navigation }) {
  // const onPressGiris = () => setCount()
  return (
    <View style={styles.kayitGirisParola}>
      <Image
        source={require('./src/Resimler/giris.png')}
        style={styles.kayitResim}
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
          <Text style={styles.butonIsim}>GİRİŞ YAP</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Link to={{ screen: 'Kaydol' }} style={styles.link}>
          Hesabın yok mu? Yeni bir hesap oluştur.
        </Link>
      </View>
    </View>
  )
}
function Parola({ navigation }) {
  return (
    <View style={styles.kayitGirisParola}>
      <Image
        source={require('./src/Resimler/parola.png')}
        style={styles.parolaResim}
      />
      <View>
        <View style={styles.form}>
          <TextInput
            style={styles.inputParola}
            placeholder="E-posta adresi"
          />
        </View>
        <TouchableOpacity
          style={styles.buton}
        // onPress={onPressGiris}
        >
          <Text style={styles.butonIsim}>PAROLAMI UNUTTUM</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Link to={{ screen: 'Kaydol' }} style={styles.link}>
          Hesabın yok mu? Yeni bir hesap oluştur.
        </Link>

      </View>
    </View>
  )

}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SINAV CEPTE" component={HosGeldiniz} />
        <Stack.Screen name="Kaydol" component={Kayit} />
        <Stack.Screen name="Giriş Yap" component={Giris} />
        <Stack.Screen name="Parolanı Sıfırla" component={Parola} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  hosgeldiniz: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  baslik: {
    marginLeft: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#BE9FE1',
  },
  resim: {
    alignItems: 'center',
    marginTop: 20,
  },
  hosgeldinizResim: {
    width: 392,
    height: 321,
  },
  butonlar: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  altButon: {
    backgroundColor: '#BE9FE1',
    width: 150,
    height: 50,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  kayitGirisParola: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  kayitResim: {
    width: 250,
    height: 250,
    alignContent: 'center',
  },
  parolaResim: {
    height: 200,
    width: 250,
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
    borderRightColor: 'white',
    borderLeftColor: 'white',
    fontSize: 17,
  },
  inputSon: {
    height: 60,
    width: 300,
    padding: 10,
    fontSize: 17,
  },
  inputParola: {
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
  butonIsim: {
    color: 'white',
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
  link: {
    color: '#E1CCEC',
    fontSize: 13,
  },

});

export default App;
