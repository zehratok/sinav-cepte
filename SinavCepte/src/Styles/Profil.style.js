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
        top: Dimensions.get('window').height / 4,
        backgroundColor: '#e8e4ec',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        bottom: 0,
        borderRadius: 10,
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
        left: 50,
        top: 10,
    },
    icon: {
        alignSelf: 'center',
        padding: 12,
        color: '#7a6790'
    },
    yazi: {
        alignSelf: 'center',
        height: 45,
        width: 275,
        padding: 10,
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
        color: '#7a6790'
    },
    profilResmi: {
        alignItems: 'center',
        width: (Dimensions.get('window').height / 3) + 2,
        height: (Dimensions.get('window').height / 3) + 2,
        borderRadius: 100,
        overflow: 'hidden',
        top: -420,
        left: 70
    },
    resim: {
        flex: 1,
        padding: Dimensions.get('window').height / 9,
        width: 100,
        height: 100,
        position: 'absolute'
    },
    nokta1: {
        backgroundColor: "#9c83b8",
        position: "absolute",
        bottom: 670,
        right: 260,
        width: 6,
        height: 6,
        borderRadius: 30,

    },
    nokta2: {
        backgroundColor: "#9c83b8",
        position: "absolute",
        bottom: 630,
        right: 245,
        width: 10,
        height: 10,
        borderRadius: 30,
    },
    nokta3: {
        backgroundColor: "#dfcef0",
        position: "absolute",
        bottom: 700,
        right: 125,
        width: 5,
        height: 5,
        borderRadius: 30,

    },
    nokta4: {
        backgroundColor: "#d4beeb",
        position: "absolute",
        bottom: 640,
        right: 260,
        width: 15,
        height: 15,
        borderRadius: 30,
    },
    nokta5: {
        backgroundColor: "#9c83b8",
        position: "absolute",
        bottom: 680,
        right: 120,
        width: 15,
        height: 15,
        borderRadius: 30,
    },
    nokta6: {
        backgroundColor: "#d4beeb",
        position: "absolute",
        bottom: 650,
        right: 130,
        width: 10,
        height: 10,
        borderRadius: 30,
    },


})