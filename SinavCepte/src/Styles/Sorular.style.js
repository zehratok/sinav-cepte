import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    soru: {
        flex: 1,
    },
    aramaCubugu: {
        backgroundColor: '#e8e4ec',
        marginBottom: 10,
        marginHorizontal: 50,
        marginTop: -10,
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

    },
    input: {
        maxWidth: 230,
        minWidth: 230,
        justifyContent: 'center',
        fontSize: 17,
        fontFamily: 'Ubuntu_500Medium',
        color: '#7a6790',
        marginHorizontal: 10,
    },
    buton: {
        justifyContent: 'center',
        marginHorizontal: 10,

    },
    liste: {
        marginBottom: 95
    }
})