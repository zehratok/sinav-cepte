import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Font from '../Font'
import { useDispatch } from 'react-redux';
const CikisDrawer = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Font />
            <TouchableOpacity style={styles.buton} onPress={() => dispatch({ type: 'REMOVE_USER' })}>
                <MaterialCommunityIcons name="logout" size={30} color="white" />
                <Text style={styles.yazi}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CikisDrawer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C9B6E4',
        padding: Dimensions.get('window').height / 70,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        marginTop: Dimensions.get('window').height / 85,
        marginBottom: Dimensions.get('window').height / 85,
        marginRight: Dimensions.get('window').width / 50,
        marginLeft: Dimensions.get('window').width / 50

    },
    buton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    yazi: {
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: Dimensions.get('window').width / 25,
        marginLeft: 5
    },

})