import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerItems from '../Constants/DrawerItems';
import { MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import AnaSayfa from '../Screens/AnaSayfa';
import Notlarim from '../Screens/Notlarim';
import Gorevlerim from '../Screens/Gorevlerim';
import CikmisSorular from '../Screens/CikmisSorular';
import SoruPaylasimi from '../Screens/SoruPaylasimi';
import Sohbet from '../Screens/Sohbet';
import Konular from '../Screens/Konular';
import Ayarlar from '../Screens/Ayarlar';
import Hakkimizda from '../Screens/Hakkimizda';
import CustomDrawer from '../Components/DrawerComponents/CustomDrawer';
import Loading from '../Components/Loading';
import {
  useFonts,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerType="front"
      initialRouteName="AnaSayfa"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#BE9FE1",
        drawerActiveTintColor: "#F1F1F6",
        drawerInactiveTintColor: "#BE9FE1",
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'Ubuntu_500Medium',
          fontSize: 15,
        }
      }}
    >
      {
        DrawerItems.map(drawer => <Drawer.Screen
          name={drawer.name}
          key={drawer.name}
          options={{
            drawerIcon: ({ focused }) =>
              drawer.iconType === 'MaterialCommunity' ?
                <MaterialCommunityIcons
                  name={drawer.iconName}
                  size={focused ? 35 : 25}
                  color={focused ? "#F1F1F6" : "#BE9FE1"}
                />
                :
                drawer.iconType === 'Material' ?
                  <MaterialIcons
                    name={drawer.iconName}
                    size={focused ? 30 : 25}
                    color={focused ? "#F1F1F6" : "#BE9FE1"}
                  />
                  :
                  drawer.iconType === 'Feather' ?
                    <Feather
                      name={drawer.iconName}
                      size={focused ? 30 : 25}
                      color={focused ? "#F1F1F6" : "#BE9FE1"}
                    />
                    :
                    <FontAwesome5
                      name={drawer.iconName}
                      size={focused ? 30 : 25}
                      color={focused ? "#F1F1F6" : "#BE9FE1"}
                    />

          }}
          component={
            drawer.name === 'Notlarım' ? Notlarim
              : drawer.name === 'Görevlerim' ? Gorevlerim
                : drawer.name === 'Soru Paylaşımı' ? SoruPaylasimi
                  : drawer.name === 'Sohbet' ? Sohbet
                    : drawer.name === 'Konular' ? Konular
                      : drawer.name === 'Çıkmış Sorular' ? CikmisSorular
                        : drawer.name === 'Ayarlar' ? Ayarlar
                          : drawer.name === 'Hakkımızda' ? Hakkimizda
                            : AnaSayfa
          } />)
      }
    </Drawer.Navigator>
  )
}

export default AppDrawer;