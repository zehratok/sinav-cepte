import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    gorevlerim: {
        flex: 1,

    },
    kutuGrup: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    kutuGrupItem: {
        flexBasis: '50%',
    },
    deneme: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})