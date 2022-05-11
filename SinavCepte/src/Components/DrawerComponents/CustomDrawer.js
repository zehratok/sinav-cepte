import { View, StyleSheet } from 'react-native'
import React from 'react'
import Font from '../Font';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import ProfilDrawer from './ProfilDrawer';
import CikisDrawer from './CikisDrawer';

const CustomDrawer = (props) => {


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Font />
            <ProfilDrawer />
            <DrawerContentScrollView {...props}
                contentContainerStyle={styles.contentContainer}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <CikisDrawer />
        </View>

    )
}

export default CustomDrawer;

const styles = StyleSheet.create({

    contentContainer: {
        fontFamily: 'Ubuntu_500Medium',
    },

})