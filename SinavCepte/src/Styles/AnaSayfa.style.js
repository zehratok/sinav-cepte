import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    anaSayfa: {

    },
    grup: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: Dimensions.get('window').width / 70,
        marginRight: Dimensions.get('window').width / 70,

    },
    kutu: {
        flex: 1,
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height / 70,
        marginTop: Dimensions.get('window').height / 70,
        marginLeft: Dimensions.get('window').width / 50,
        marginRight: Dimensions.get('window').width / 50,
        padding: Dimensions.get('window').width / 70,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        shadowColor: '#959da5',

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