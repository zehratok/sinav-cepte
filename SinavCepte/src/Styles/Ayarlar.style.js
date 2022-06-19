import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e8e4ec',

    },
    ayarlar: {
        flex: 1,
    },
    kutu: {
        alignSelf: 'center',
        height: 500,
        width: Dimensions.get('window').width,
        top: Dimensions.get('window').height / 5,
        bottom: 0,
    },
    formContainer: {
        alignSelf: 'center',
        bottom: 80,
    },
    form: {
        alignSelf: 'center',
        bottom: 80,
    },
    inputGrup: {
        alignSelf: 'center',
        flexDirection: 'row',
        left: 30,
        top: 250,
    },
    icon: {
        alignSelf: 'center',
        padding: 12,
        color: '#7a6790'
    },
    input: {
        alignSelf: 'center',
        height: 45,
        width: 275,
        padding: 10,
        fontSize: 17,
        fontFamily: 'Ubuntu_400Regular',
        color: '#9c83b8',
    },
    profilResmi: {
        alignSelf: 'center',
        width: (Dimensions.get('window').height / 3) + 2,
        height: (Dimensions.get('window').height / 3) + 2,
        borderRadius: 100,
        overflow: 'hidden',
        top: -470,
        left: 40
    },
    resim: {
        flex: 1,
        padding: Dimensions.get('window').height / 9,
        width: 100,
        height: 100,
        position: 'absolute'
    },
    ekle: {
        backgroundColor: "#7a6790",
        position: "absolute",
        bottom: 565,
        right: 135,
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    buton: {
        backgroundColor: '#7a6790',
        alignItems: 'center',
        borderRadius: 10,
        top: 240,
        marginBottom: Dimensions.get('window').height / 50,
        height: Dimensions.get('window').height / 14,
        padding: Dimensions.get('window').height / 50,
    },
    butonText: {
        alignSelf: 'center',
        color: '#e8e4ec',
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
    },
    nokta1: {
        backgroundColor: "#9c83b8",
        position: "absolute",
        bottom: 620,
        right: 258,
        width: 6,
        height: 6,
        borderRadius: 30,

    },
    nokta2: {
        backgroundColor: "#9c83b8",
        position: "absolute",
        bottom: 580,
        right: 245,
        width: 10,
        height: 10,
        borderRadius: 30,
    },
    nokta3: {
        backgroundColor: "#dfcef0",
        position: "absolute",
        bottom: 650,
        right: 120,
        width: 5,
        height: 5,
        borderRadius: 30,

    },
    nokta4: {
        backgroundColor: "#d4beeb",
        position: "absolute",
        bottom: 590,
        right: 260,
        width: 15,
        height: 15,
        borderRadius: 30,
    },
    nokta5: {
        backgroundColor: "#9c83b8",
        position: "absolute",
        bottom: 630,
        right: 110,
        width: 15,
        height: 15,
        borderRadius: 30,
    },
    nokta6: {
        backgroundColor: "#d4beeb",
        position: "absolute",
        bottom: 600,
        right: 120,
        width: 10,
        height: 10,
        borderRadius: 30,
    },


})