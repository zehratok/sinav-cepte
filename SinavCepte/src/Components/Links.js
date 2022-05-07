import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';
import Font from './Font';

const Links = ({ to, text }) => {
    return (
        <Link style={styles.link} to={to}>
            <Font />
            {text}
        </Link>
    )
}

export default Links;

const styles = StyleSheet.create({
    link: {
        margin: Dimensions.get('window').height / 75,
        color: '#E1CCEC',
        fontSize: Dimensions.get('window').width / 30,
        fontFamily:'Ubuntu_300Light',
    },
})