import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e8e4ec',
    },
    kartlar: {
        flex: 1,
    },
    grup: {
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
    kartKey:{
        backgroundColor:'white',
        width:120,
        height:120,
        alignSelf:'center',

    }
})