import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import Font from '../Font';
import { Link } from '@react-navigation/native';

const MenuKutu = (props) => {
    const Icon = () => {
        if (props.icon === 'MaterialCommunity') {
            return (
                <MaterialCommunityIcons name={props.name} style={styles.icon} />
            )
        }
        if (props.icon === 'FontAwesome5') {
            return (
                <FontAwesome5 name={props.name} style={styles.icon} />
            )
        }
        if (props.icon === 'FontAwesome') {
            return (
                <FontAwesome name={props.name} style={styles.icon} />
            )
        }
        if (props.icon === 'Material') {
            return (
                <MaterialIcons name={props.name} style={styles.icon} />
            )
        }
        if (props.icon === 'Entypo') {
            return (
                <Entypo name={props.name} style={styles.icon} />
            )
        }
    }

    return (
        <View>
            <Font />
            <TouchableOpacity style={styles.kutu}>
                <Link style={styles.icon} to={props.to} >
                    {Icon()}
                </Link>
                <Link to={props.to} style={styles.baslik} >
                    <View>
                        <Text style={styles.yazi}>{props.baslik} </Text>
                        <Text style={styles.yazi2}>{props.baslik2} </Text>
                    </View>
                </Link>
            </TouchableOpacity>
        </View>
    )
}

export default MenuKutu;

const styles = StyleSheet.create({
    kutu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: Dimensions.get('window').height / 65,
    },
    icon: {
        alignSelf: 'center',
        fontSize:50,
        color: '#7a6790',
        marginTop: 10,

    },
    baslik: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    yazi: {
        flex: 1,
        alignSelf: 'center',
        fontSize: Dimensions.get('window').height / 40,
        color: '#5b4d6a',
        fontFamily: 'Ubuntu_700Bold_Italic',
    },
    yazi2: {
        flex: 1,
        alignSelf: 'center',
        fontSize: Dimensions.get('window').height / 40,
        color: '#5b4d6a',
        fontFamily: 'Ubuntu_700Bold_Italic'
    },
})