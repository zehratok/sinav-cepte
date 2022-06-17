import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e8e4ec',
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
})