import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#BE9FE1',
    },
    profil: {
        flex: 1,
    },
    kutu: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        paddingVertical: Dimensions.get('window').height / 3,
        top: Dimensions.get('window').height / 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        bottom: 0,
        left: -(Dimensions.get('window').width / 5),
        borderRadius: 30,
        position: 'absolute'
    },
    formContainer: {
        alignSelf: 'center',
        bottom: 80,
    },
    form: {
        alignSelf: 'center',
        bottom: 50,
    },
    inputGrup: {
        alignSelf: 'center',
        flexDirection: 'row',
        left: 20,
        top: 10,
    },
    icon: {
        alignSelf: 'center',
        padding: 12,
    },
    input: {
        alignSelf: 'center',
        height: 45,
        width: 275,
        padding: 10,
        fontSize: 17,
        fontFamily: 'Ubuntu_400Regular',
        color: 'grey',
    },
    profilResmi: {
        alignItems: 'center',
        width: (Dimensions.get('window').height / 3) + 2,
        height: (Dimensions.get('window').height / 3) + 2,
        borderRadius: 100,
        overflow: 'hidden',
        top: Dimensions.get('window').height / 12,
    },
    resim: {
        flex: 1,
        padding: Dimensions.get('window').height / 9,
        width: 100,
        height: 100,
        position: 'absolute'
    },
    ekle: {
        backgroundColor: "#C9B6E4",
        position: "absolute",
        bottom: 35,
        right: 50,
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    }

})