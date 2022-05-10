import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from '../../Styles/AnaSayfa.style';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Font from '../Font';
const Kutu2 = (props) => {
    const Icon = () => {
        if (props.icon === 'MaterialCommunity') {
            return (
                <MaterialCommunityIcons name={props.name} style={styles.icons} />
            )
        }
        if (props.icon === 'FontAwesome5') {
            return (
                <FontAwesome5 name={props.name} style={styles.icons} />
            )
        }
        if (props.icon === 'FontAwesome') {
            return (
                <FontAwesome name={props.name} style={styles.icons} />
            )
        }
        if (props.icon === 'Material') {
            return (
                <MaterialIcons name={props.name} style={styles.icons} />
            )
        }
        
        
    }
    return (
        <View style={styles.kutu2}>
            <Font />
            <TouchableOpacity
                onPress={props.screen}>
                {Icon()}
                <Text style={styles.baslik}>{props.baslik}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Kutu2;