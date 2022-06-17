import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    notEkle: {
        flex: 1
    },
    notDetay: {
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
        marginRight:30,
        color: '#9c83b8',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        maxHeight:40
    },
    icerik: {
        height: Dimensions.get('window').height / 2,
        margin: 10,
    },
    icerikInput: {
        color: '#be9fe1',
        fontSize: 15,
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

})