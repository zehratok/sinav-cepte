import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e8e4ec',
    },
    soruPaylasimi: {
        flex: 1,
    },
    grup: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    kutu: {
        flex: 1,
        marginHorizontal: Dimensions.get('window').width / 50,
        marginVertical: Dimensions.get('window').height / 70,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0,

    },
    kutuResim: {
        width: (Dimensions.get('window').width / 2) - 25,
        alignItems: 'center',
        height: 150,
        top: 9,
        marginHorizontal: Dimensions.get('window').width / 50,
        marginVertical: Dimensions.get('window').height / 70,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0,

    },
    kutuResimTimer: {
        top: 5,
        alignSelf: 'center',
        width: 350,
        height: 225,
        marginHorizontal: Dimensions.get('window').width / 50,
        marginVertical: Dimensions.get('window').height / 70,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0,
        flexDirection: 'row'
    },
    timer: {
        flex: 1,
        marginHorizontal: Dimensions.get('window').width / 50,
        marginVertical: Dimensions.get('window').height / 70,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0,
    },
    timerYazi: {
        fontSize: 20,
        fontFamily: 'Ubuntu_500Medium',
        alignSelf: 'center',
        color: '#5b4d6a',

    }
})