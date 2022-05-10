import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    anaSayfa: {
        marginLeft: Dimensions.get('window').width / 20,
        marginRight: Dimensions.get('window').width / 20,
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
    },
    kutu1: {
        flexDirection: 'row',
        alignContent: 'space-around',
        marginBottom: Dimensions.get('window').height / 90,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        borderColor: '#68636b',
        backgroundColor: '#BE9FE1',
        elevation: 5,
    },
    icon: {
        marginTop: Dimensions.get('window').height / 28,
        marginLeft: Dimensions.get('window').width / 25,
        marginRight: Dimensions.get('window').width / 30,
        fontSize: Dimensions.get('window').width / 10,
        color: 'white',
    },
    metin: {
        margin: Dimensions.get('window').height / 99,
        flex: 1,
    },
    merhaba: {
        marginTop: Dimensions.get('window').height / 90,
        marginBottom: Dimensions.get('window').height / 90,
        fontFamily: 'Ubuntu_700Bold',
        fontSize: Dimensions.get('window').width / 25,
        color: 'white',
    },
    soz: {
        marginRight: Dimensions.get('window').width / 99,
        fontFamily: 'Ubuntu_400Regular_Italic',
        fontSize: Dimensions.get('window').width / 30,
        color: '#F1F1F6',
    },
    soyleyen: {
        alignSelf: 'flex-end',
        marginRight: Dimensions.get('window').width / 25,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: Dimensions.get('window').width / 30,
        color: '#F1F1F6',
    },
    kutu2: {
        flex: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        shadowColor: '#959da5',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderColor: '#F1F1F6',
        marginBottom: Dimensions.get('window').height / 70,
        marginTop: Dimensions.get('window').height / 70,
        marginLeft: Dimensions.get('window').width / 70,
        marginRight: Dimensions.get('window').width / 70,
    },
    icons: {
        marginTop: Dimensions.get('window').height / 35,
        fontSize: Dimensions.get('window').width / 7,
        color: '#BE9FE1',
        alignSelf: 'center'
    },
    baslik: {
        flex: 1,
        marginTop: Dimensions.get('window').height / 90,
        marginBottom: Dimensions.get('window').height / 35,
        alignSelf: 'center',
        fontSize: Dimensions.get('window').width / 25,
        color: '#BE9FE1',
        fontFamily: 'Ubuntu_700Bold_Italic'
    },
    kutu3: {
        backgroundColor: '#C9B6E4',
        flex: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        shadowColor: '#959da5',
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderColor: '#68636b',
        marginBottom: Dimensions.get('window').height / 70,
        marginTop: Dimensions.get('window').height / 70,
        marginLeft: Dimensions.get('window').width / 70,
        marginRight: Dimensions.get('window').width / 70,
    },

})