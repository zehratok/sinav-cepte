import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    notDetay: {
        flex: 1
    },
    form: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        marginVertical: 25,
        borderRadius: 25
    },
    baslik: {
        height: Dimensions.get('window').height / 16,
        borderBottomColor: '#F1F1F6',
        borderBottomWidth: 1,
        margin: 5,
    },
    baslikInput: {
        left: 15,
        top: 5,
        color: '#BE9FE1',
        fontSize: 20,
        fontFamily: 'Ubuntu_500Medium',
    },
    icerik: {
        height: Dimensions.get('window').height / 2,
        margin: 10
    },
    icerikInput: {
        color: '#C9B6E4',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic',
        left: 5
    }, dateText: {
        color: '#b3b3b5',
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
        backgroundColor: '#F1F1F6',
        alignSelf: 'center',
        width: (Dimensions.get('window').width / 2) - 40,
        justifyContent: 'center',
        borderRadius: 25,
        padding: 10,
        bottom: 5
    },
    dateButonText: {
        alignSelf: 'center',
        color: '#C9B6E4',
        fontSize: 20,
        fontFamily: 'Ubuntu_500Medium',

    },
    buton: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#BE9FE1',
        width: Dimensions.get('window').width / 2,
        height: 45,
        justifyContent: 'center',
        borderRadius: 10
    },
    butonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
    },

})