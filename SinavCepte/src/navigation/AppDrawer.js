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
            // header: ({ navigation, route, options, back }) => {
            //   const title = getHeaderTitle(options, route.name);
            //   return (
            //     <Header
            //       screen={title}
            //       style={options.headerStyle}
            //     />
            //   );
            // },
            drawerIcon: ({ focused }) =>
              drawer.iconType === 'MaterialCommunity' ?
                <MaterialCommunityIcons
                  name={drawer.iconName}
                  size={focused ? 35 : 25}
                  color={focused ? "#F1F1F6" : "#BE9FE1"}
                />
                :
                drawer.iconType === 'Material' ?
                  <MaterialIcon
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
                        : AnaSayfa
          } />)
      }
    </Drawer.Navigator>
  )
}

export default AppDrawer;