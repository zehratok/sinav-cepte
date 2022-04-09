import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Buton from '../Components/Buton'

import styles from '../Styles/AnaSayfa.style'

const AnaSayfa = () => {
    const data = useSelector(s => s.data);
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.deneme}>
                <Text style={styles.baslik}>Merhaba {data.adSoyad} </Text>

                <Buton text="ÇIKIŞ YAP"
                    onPress={() => dispatch({ type: 'REMOVE_USER' })} />

            </SafeAreaView>
        </ScrollView>
    )
}

export default AnaSayfa

