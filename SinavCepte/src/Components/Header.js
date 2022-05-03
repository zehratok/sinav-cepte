import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
const Header = ({ screen }) => {
    const navigation = useNavigation();
    return (
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="#C9B6E4" />
            </TouchableOpacity>
            <View>
                <Text style={headerStyles.text}>{screen}</Text>
            </View>
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 24,
        left: 0,
        width: '100%',
        backgroundColor: '#F1F1F6',
        elevation: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    text: {
        left: 5,
        color: '#C9B6E4',
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 1,
    }
})