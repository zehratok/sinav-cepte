import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CountDown from 'react-native-countdown-component';

const TimerKutu = (props) => {
    return (
        <View>
            <CountDown
                until={props.until}
                onFinish={() => Alert.alert('GERİ SAYIM BİTTİ!')}
                onPress={() => Alert.alert('Zaman geçiyor...')}
                digitStyle={styles.digit}
                digitTxtStyle={styles.digitTxt}
                size={20}
                timeLabels={{ d: 'Gün', h: 'Saat', m: 'Dakika', s: 'Saniye' }}
                timeLabelStyle={styles.label}
            />
        </View>
    )
}

export default TimerKutu

const styles = StyleSheet.create({
    digit: {
        backgroundColor: '#e8e4ec',
        width: 35,
        height: 45,
    },
    digitTxt: {
        color: '#5b4d6a',
        fontFamily:'Ubuntu_500Medium',
        fontSize:20
    },
    label: {
        color: '#5b4d6a',
        fontFamily: 'Ubuntu_400Regular'
    }
})