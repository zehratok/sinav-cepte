import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Loading from './src/Components/Loading';
import Baslangic from './src/Navigation/Baslangic';
import AppStack from './src/Navigation/AppStack';


const Router = () => {
  const userSession = useSelector(s => s.data);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ?
        (
          <Loading />
        ) : !userSession ? (
          <Baslangic />
        ) : (
          <AppStack />
        )}
    </NavigationContainer >
  )
}
export default Router;