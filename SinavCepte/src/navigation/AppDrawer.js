import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import DrawerItems from '../Constants/DrawerItems';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import AnaSayfa from '../Pages/AnaSayfa';
import Profil from '../Pages/Profil';
import Notlarim from '../Pages/Notlarim';
import Gorevlerim from '../Pages/Gorevlerim';
import CikmisSorular from '../Pages/CikmisSorular';
import SoruPaylasimi from '../Pages/SoruPaylasimi';
import Sohbet from '../Pages/Sohbet';
import Konular from '../Pages/Konular';
import Ayarlar from '../Pages/Ayarlar';
import Header from '../Components/Header';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
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
  )
}

export default AppDrawer;