import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    gorevlerim: {
        flex: 1,

    },
    deneme: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})