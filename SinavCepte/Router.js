import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HosGeldiniz from './src/Components/Sayfalar/HosGeldiniz';
import Kayit from './src/Components/Sayfalar/Kayit';
import Giris from './src/Components/Sayfalar/Giris';
import Parola from './src/Components/Sayfalar/Parola';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SINAV CEPTE" component={HosGeldiniz} />
        <Stack.Screen name="Kaydol" component={Kayit} />
        <Stack.Screen name="Giriş Yap" component={Giris} />
        <Stack.Screen name="Parolanı Sıfırla" component={Parola} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;