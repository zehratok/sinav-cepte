import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { getHeaderTitle } from '@react-navigation/elements';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

import DrawerItems from './src/Constants/DrawerItems';
import Loading from './src/Components/Loading';
import HosGeldiniz from './src/Pages/HosGeldiniz';
import Kayit from './src/Pages/Kayit';
import Giris from './src/Pages/Giris';
import Parola from './src/Pages/Parola';
import Profil from './src/Pages/Profil';
import AnaSayfa from './src/Pages/AnaSayfa';
import Sayfa1 from './src/Pages/Sayfa1';
import Sayfa2 from './src/Pages/Sayfa2';
import Header from './src/Components/Header';
import Sayfa3 from './src/Pages/Sayfa3';
import Sayfa4 from './src/Pages/Sayfa4';
import Sayfa5 from './src/Pages/Sayfa5';

const Drawer = createDrawerNavigator();

const Router = () => {
  const userSession = useSelector(s => s.data);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  return (
    <NavigationContainer>
      {isAuthLoading ?
        (
          <Loading />
        ) : !userSession ? (
          <Drawer.Navigator>
            <Drawer.Group screenOptions={{
              headerShown: false,
            }}>
              <Drawer.Screen name="SINAV CEPTE" component={HosGeldiniz} />
              <Drawer.Screen name="Kaydol" component={Kayit} />
              <Drawer.Screen name="Giriş Yap" component={Giris} />
              <Drawer.Screen name="Parolanı Sıfırla" component={Parola} />
            </Drawer.Group>
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator
            drawerType="front"
            initialRouteName="AnaSayfa"
            screenOptions={{
              drawerActiveBackgroundColor: '#BE9FE1',
              drawerActiveTintColor: '#F1F1F6',
              drawerInactiveTintColor: '#BE9FE1',
              drawerItemStyle: {
                padding: 3,
                borderRadius: 10,
              }
            }}
          >
            {
              DrawerItems.map(drawer => <Drawer.Screen
                name={drawer.name}
                key={drawer.name}
                options={{
                  header: ({ navigation, route, options, back }) => {
                    const title = getHeaderTitle(options, route.name);
                    return (
                      <Header
                        screen={title}
                        style={options.headerStyle}
                      />
                    );
                  },
                  drawerIcon: ({ focused }) =>
                    drawer.iconType === 'Material' ?
                      <MaterialCommunityIcons
                        name={drawer.iconName}
                        size={30}
                        color={focused ? "#F1F1F6" : "#BE9FE1"}
                      />
                      :
                      drawer.iconType === 'Feather' ?
                        <Feather
                          name={drawer.iconName}
                          size={30}
                          color={focused ? "#F1F1F6" : "#BE9FE1"}
                        />
                        :
                        <FontAwesome5
                          name={drawer.iconName}
                          size={30}
                          color={focused ? "#F1F1F6" : "#BE9FE1"}
                        />
                  ,
                  headerShown: true,
                }}
                component={
                  drawer.name === 'Profil' ? Profil
                    : drawer.name === 'Ayarlar' ? Sayfa1
                      : drawer.name === 'Notlarım' ? Sayfa2
                        : drawer.name === 'Görevlerim' ? Sayfa3
                          : drawer.name === 'Çıkmış Sorular' ? Sayfa4
                            : drawer.name === 'Konular' ? Sayfa5
                              : AnaSayfa
                } />)
            }
          </Drawer.Navigator>
        )}
    </NavigationContainer >
  )
}
export default Router;