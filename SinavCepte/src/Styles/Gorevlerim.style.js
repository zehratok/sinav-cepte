import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor:'white'

    },
    deneme:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    baslik: {
        alignSelf: 'center',
        fontSize: Dimensions.get('window').width / 20,
        fontWeight: 'bold',
        color: '#BE9FE1',
    },
})