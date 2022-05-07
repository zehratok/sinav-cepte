import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    hosgeldiniz: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: Dimensions.get('window').height / 10,

    },
    baslik: {
        alignSelf: 'center',
        marginBottom: Dimensions.get('window').height / 15,
        fontSize: 40,
        fontFamily: 'Ubuntu_700Bold_Italic',
        color: '#BE9FE1',
    },
    buton: {
        marginTop: Dimensions.get('window').height / 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

});