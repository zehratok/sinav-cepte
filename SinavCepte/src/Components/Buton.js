import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';

const Buton = ({ text, loading, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buton}
            onPress={onPress}
            loading={loading}
            disabled={loading}
        >
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
        padding: 13,
    },
    yazi: {
        color: 'white',
        fontSize: 17,
    },

})