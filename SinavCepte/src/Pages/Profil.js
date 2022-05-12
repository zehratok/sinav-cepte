import React, { useState } from 'react'
import { RefreshControl, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Buton from '../Components/Buton'
import DurumCubugu from '../Components/DurumCubugu'
import Header from '../Components/Header'
import styles from '../Styles/Profil.style'

const Profil = () => {
    const data = useSelector(s => s.data);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 10000)
    }
    return (
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={() => pullMe}
                />
            }
        >
            <DurumCubugu />
            <Header />
            <SafeAreaView style={styles.deneme}>
                <DurumCubugu />
                <Text style={styles.baslik}>Merhaba {data.adSoyad} </Text>

                <Buton text="ÇIKIŞ YAP"
                    onPress={() => dispatch({ type: 'REMOVE_USER' })} />
            </SafeAreaView>
        </ScrollView >
    )
}

export default Profil

