import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    soruEkle: {
        flex: 1
    },
    form: {
        backgroundColor: '#e8e4ec',
        marginHorizontal: 25,
        marginVertical: 25,
        borderRadius: 10
    },
    baslik: {
        height: Dimensions.get('window').height / 17,
        borderBottomColor: '#dfcef0',
        borderBottomWidth: 1,
        margin: 5,
    },
    baslikInput: {
        left: 15,
        top: 5,
        marginRight:30,
        color: '#9c83b8',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium',
        maxHeight:40
    },
    konu: {
        height: Dimensions.get('window').height / 17,
        borderBottomColor: '#dfcef0',
        borderBottomWidth: 1,
        margin: 5,
    },
    konuInput: {
        left: 15,
        top: 5,
        marginRight:30,
        color: '#9c83b8',
        fontSize: 15,
        maxHeight:40,
        fontFamily: 'Ubuntu_400Regular',
    },
    aciklama: {
        height: Dimensions.get('window').height / 3,
        margin: 10,
    },
    aciklamaInput: {
        color: '#be9fe1',
        fontSize: 14,
        fontFamily: 'Ubuntu_400Regular',
        left: 5,
        marginRight:8
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
    radioButton: {
        flexDirection: 'row',
    },
    grup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 10
    },
    selectedText: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 13,
        marginTop: 15,
        color: '#5b4d6a'
    },
    unselectedText: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 13,
        marginVertical: 15,
        color: '#c0b0d1'
    },
    secenek: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: '#c0b0d1',
        margin: 5,
        height: 20,
        width: 20,
        borderRadius: 100,
        marginTop: 12

    },
    selected: {
        backgroundColor: '#5b4d6a',
        margin: 5,
        padding: 10,
        height: 20,
        width: 20,
        borderRadius: 50,
        marginTop: 12
    },
    resim: {
        margin: 5,
        marginRight: 25
    },
})