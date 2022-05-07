import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    giris: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    form: {
        backgroundColor: 'white',
        borderColor: '#F1F1F6',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        height: 60,
        width: 300,
        borderWidth: 1,
        borderBottomColor: '#F1F1F6',
        padding: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        fontSize: 17,
        fontFamily:'Ubuntu_400Regular',
        color:'grey',
    },
    inputSon: {
        height: 60,
        width: 300,
        padding: 10,
        fontSize: 17,
        fontFamily:'Ubuntu_400Regular',
        color:'grey',
    },
    parolaLink: {
        alignItems: 'flex-end',
        textAlign: 'right',
    },
})