import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import Loading from './src/Components/Loading';
import Baslangic from './src/navigation/Baslangic';
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppDrawer from './src/navigation/AppDrawer';

const Router = () => {
  const userSession = useSelector(s => s.data);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isAuthLoading ?
        (
          <Loading />
        ) : !userSession ? (
          <Baslangic />
        ) : (
          <AppDrawer />
        )}
    </NavigationContainer >
  )
}
export default Router;