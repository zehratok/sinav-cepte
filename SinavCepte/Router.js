import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HosGeldiniz from './src/Pages/HosGeldiniz';
import Kayit from './src/Pages/Kayit';
import Giris from './src/Pages/Giris';
import Parola from './src/Pages/Parola';
import Profil from './src/Pages/Profil';
import { useSelector } from 'react-redux';
import Loading from './src/Components/Loading';
import AnaSayfa from './src/Pages/AnaSayfa';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.data);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  return (
    <NavigationContainer>
      {isAuthLoading ?
        (
          <Loading />
        ) : !userSession ? (
          <Stack.Navigator>
            <Stack.Group screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="SINAV CEPTE" component={HosGeldiniz} />
              <Stack.Screen name="Kaydol" component={Kayit} />
              <Stack.Screen name="Giriş Yap" component={Giris} />
              <Stack.Screen name="Parolanı Sıfırla" component={Parola} />
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Group screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="Ana Sayfa" component={AnaSayfa} />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="Profil" component={Profil} />
            </Stack.Group>
          </Stack.Navigator>
        )}
    </NavigationContainer >
  )
}
export default Router;