import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e8e4ec',
    },
    sohbet: {
        flex: 1,
    },
    grup: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    kutu: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: Dimensions.get('window').width / 50,
        marginVertical: Dimensions.get('window').height / 70,
        padding: Dimensions.get('window').width / 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 50,
        borderWidth: 0,
        backgroundColor: '#dfcef0'
    },

})