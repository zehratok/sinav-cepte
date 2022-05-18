import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import MotivasyonItems from '../../Constants/MotivasyonItems';

const HeaderAnaSayfaKutu = () => {
    const data = useSelector(s => s.data);
    const rand = MotivasyonItems[Math.floor(Math.random() * MotivasyonItems.length)];

    return (
        <View style={styles.kutu}>
            <Text style={styles.baslik}>
                Merhaba {data.adSoyad}
            </Text>
            < Text style={styles.soz}>"{rand.soz}"</Text>
            <Text style={styles.soyleyen}>-{rand.soyleyen}</Text>
        </View>
    )
}
export default HeaderAnaSayfaKutu;

const styles = StyleSheet.create({
    kutu: {
        margin: Dimensions.get('window').height / 99,
        flex: 1,
    },
    baslik: {
        marginTop: Dimensions.get('window').height / 90,
        marginBottom: Dimensions.get('window').height / 90,
        fontFamily: 'Ubuntu_700Bold',
        fontSize: Dimensions.get('window').width / 24,
        color: 'white',
    },
    soz: {
        marginRight: Dimensions.get('window').width / 98,
        fontFamily: 'Ubuntu_400Regular_Italic',
        fontSize: Dimensions.get('window').width / 30,
        color: '#F1F1F6',
    },
    soyleyen: {
        alignSelf: 'flex-end',
        marginRight: Dimensions.get('window').width / 25,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: Dimensions.get('window').width / 30,
        color: '#F1F1F6',
    },
})