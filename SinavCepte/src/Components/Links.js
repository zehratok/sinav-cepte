import { Dimensions, StyleSheet} from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';


const Links = ({ to, text }) => {
    return (
        <Link style={styles.link} to={to}>
            {text}
        </Link>
    )
}

export default Links;

const styles = StyleSheet.create({
    link: {
        color: '#E1CCEC',
        fontSize: 13,
        margin: Dimensions.get('window').height/75,
    },
})