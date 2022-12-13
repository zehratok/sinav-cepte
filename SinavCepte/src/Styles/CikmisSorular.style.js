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
    grup: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    kutu: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: Dimensions.get('window').width / 50,
        marginVertical: Dimensions.get('window').height / 70,
        padding: Dimensions.get('window').width / 50,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0,
        backgroundColor: '#dfcef0'
    },
})