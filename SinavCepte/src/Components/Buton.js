import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import Font from './Font';
const Buton = ({ text, loading, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buton}
            onPress={onPress}
            loading={loading}
            disabled={loading}
        >
            <Font />
            {loading ? (
                <ActivityIndicator color='white' />
            ) : (
                <Text style={styles.yazi}>{text}</Text>
            )}
        </TouchableOpacity >
    )
}
export default Buton;

const styles = StyleSheet.create({
    buton: {
        backgroundColor: '#BE9FE1',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: Dimensions.get('window').height / 50,
        marginBottom: Dimensions.get('window').height / 50,
        height: Dimensions.get('window').height / 14,
        padding: Dimensions.get('window').height / 50,
    },
    yazi: {
        color: 'white',
        fontSize: Dimensions.get('window').width / 25,
        fontFamily: 'Ubuntu_500Medium',
    },

})