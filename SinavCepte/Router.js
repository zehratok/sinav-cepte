import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { getHeaderTitle } from '@react-navigation/elements';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import DrawerItems from './src/Constants/DrawerItems';
import Loading from './src/Components/Loading';
import Header from './src/Components/Header';
import Baslangic from './src/navigation/Baslangic';
import AnaSayfa from './src/Pages/AnaSayfa';
import Profil from './src/Pages/Profil';
import Ayarlar from './src/Pages/Ayarlar';
import Notlarim from './src/Pages/Notlarim';
import Gorevlerim from './src/Pages/Gorevlerim';
import SoruPaylasimi from './src/Pages/SoruPaylasimi';
import Sohbet from './src/Pages/Sohbet';
import Konular from './src/Pages/Konular';
import CikmisSorular from './src/Pages/CikmisSorular';
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

const Drawer = createDrawerNavigator();

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
            <Drawer.Group>
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
                      drawer.iconType === 'MaterialCommunity' ?
                        <MaterialCommunityIcons
                          name={drawer.iconName}
                          size={30}
                          color={focused ? "#F1F1F6" : "#BE9FE1"}
                        />
                        :
                        drawer.iconType === 'Material' ?
                          <MaterialIcon
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
                      : drawer.name === 'Ayarlar' ? Ayarlar
                        : drawer.name === 'Notlarım' ? Notlarim
                          : drawer.name === 'Görevlerim' ? Gorevlerim
                            : drawer.name === 'Soru Paylaşımı' ? SoruPaylasimi
                              : drawer.name === 'Sohbet' ? Sohbet
                                : drawer.name === 'Konular' ? Konular
                                  : drawer.name === 'Çıkmış Sorular' ? CikmisSorular
                                    : AnaSayfa
                  } />)
              }
            </Drawer.Group>

          </Drawer.Navigator>
        )}
    </NavigationContainer >
  )
}
export default Router;