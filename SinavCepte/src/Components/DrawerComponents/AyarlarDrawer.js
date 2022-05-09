import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Font from '../Font'
import { useDispatch } from 'react-redux'
const AyarlarDrawer = () => {
    const dispatch = useDispatch();
    function handleAyar() {

    }

    return (
        <View style={styles.container}>
            <Font />
            <TouchableOpacity style={styles.buton} onPress={handleAyar}>
                <MaterialIcons name="settings" size={30} color="#C9B6E4" />
                <Text style={styles.yazi}>Ayarlar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton} onPress={() => dispatch({ type: 'REMOVE_USER' })}>
                <MaterialCommunityIcons name="logout" size={30} color="#C9B6E4" />
                <Text style={styles.yazi}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AyarlarDrawer

const styles = StyleSheet.create({
    container: {
        padding: Dimensions.get('window').height / 50,
        justifyContent: 'center',
        borderTopColor:'#F1F1F6',
        borderTopWidth:1,
    },
    buton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: Dimensions.get('window').height / 80,
    },
    yazi: {
        flex: 1,
        color: '#C9B6E4',
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: Dimensions.get('window').width / 25,
        marginLeft: 5
    },

})