import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    gorevEkle: {
        flex: 1
    },
    gorevDetay: {
        flex: 1
    },
    form: {
        backgroundColor: '#e8e4ec',
        marginHorizontal: 25,
        marginVertical: 25,
        borderRadius: 10
    },
    baslik: {
        height: Dimensions.get('window').height / 13,
        borderBottomColor: '#dfcef0',
        borderBottomWidth: 1,
        margin: 5,
    },
    baslikInput: {
        left: 15,
        top: 5,
        marginRight: 30,
        color: '#9c83b8',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        maxHeight: 40
    },
    icerik: {
        margin: 10,
        borderBottomColor: '#dfcef0',
        height: (Dimensions.get('window').height / 3) + 50,
        borderBottomWidth: 1,
    },
    icerikInput: {
        color: '#be9fe1',
        fontSize: 15,
        fontFamily: 'Ubuntu_400Regular',
        left: 5,
        marginRight: 8

    },
    dateText: {
        color: '#9c83b8',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium',
        padding: 12,
        bottom: 5,
        left: 10,
    },
    date: {
        height: (Dimensions.get('window').height / 15),
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    dateButon: {
        backgroundColor: '#d4beeb',
        alignSelf: 'center',
        width: (Dimensions.get('window').width / 2) - 40,
        justifyContent: 'center',
        borderRadius: 25,
        padding: 10,
        bottom: 5
    },
    dateButonText: {
        alignSelf: 'center',
        color: '#f4effa',
        fontSize: 20,
        fontFamily: 'Ubuntu_500Medium',

    },
    buton: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#7a6790',
        width: Dimensions.get('window').width / 2,
        height: 45,
        justifyContent: 'center',
        borderRadius: 10
    },
    butonText: {
        alignSelf: 'center',
        color: '#e8e4ec',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
    },

})