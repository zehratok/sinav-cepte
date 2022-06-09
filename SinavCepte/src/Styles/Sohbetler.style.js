import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    contentContainer:{
        flex: 1,

    },
    sohbet: {
        flex: 1,
        marginTop: -24
    },
    form: {
        top: 15,
        marginLeft: 10,
        borderRadius: 25,
        maxHeight: (Dimensions.get('window').height/2) -10,
        backgroundColor: 'white',
        width: (Dimensions.get('window').width) - 70,
        marginBottom:15,
    },
    buton: {
        top: 10,
        marginLeft: 5,
        alignSelf: 'center',
        height: 50,
        justifyContent: 'center',
        borderRadius: 50,
        marginRight:10,
    },
    icerik: {
        color: '#c0b5cb',
        marginLeft: 20,
        marginTop: 3,
    },
    icerikInput: {
        color: '#5b4d6a',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium_Italic',
    },
    formik: {
        height: 80,
        justifyContent: 'space-between',
    },
    formGrup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})