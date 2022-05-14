import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    notlarim: {
        flex: 1,
    },
    kutuGrup: {
        flexDirection: 'row',
    },
    deneme: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})