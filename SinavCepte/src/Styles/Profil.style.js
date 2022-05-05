import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    baslik: {
        alignSelf: 'center',
        fontSize: Dimensions.get('window').width/20,
        fontWeight: 'bold',
        color: '#BE9FE1',
    },
    deneme: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})