import { View, StyleSheet } from 'react-native'
import React from 'react'
import Font from '../Font';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import ProfilDrawer from './ProfilDrawer';
import AyarlarDrawer from './AyarlarDrawer';

const CustomDrawer = (props) => {


    return (
        <View style={{ flex: 1, backgroundColor: '#e9e9f2' }}>
            <Font />
            <ProfilDrawer />
            <DrawerContentScrollView {...props}
                contentContainerStyle={styles.contentContainer}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <AyarlarDrawer />
        </View>

    )
}

export default CustomDrawer;

const styles = StyleSheet.create({

    contentContainer: {
        backgroundColor: '#e9e9f2',
        fontFamily: 'Ubuntu_500Medium',
    }
})