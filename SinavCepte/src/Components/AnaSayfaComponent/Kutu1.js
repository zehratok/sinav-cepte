import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../../Styles/AnaSayfa.style'
import MotivasyonItems from '../../Constants/MotivasyonItems';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Kutu1 = () => {
    const data = useSelector(s => s.data);
    const rand = MotivasyonItems[Math.floor(Math.random() * MotivasyonItems.length)];

    return (
        <View style={styles.kutu1}>
            <MaterialCommunityIcons name="book-open-page-variant" style={styles.icon} />
            <View style={styles.metin}>
                <Text style={styles.merhaba}>
                    Merhaba {data.adSoyad}
                </Text>
                < Text style={styles.soz}>"{rand.soz}"</Text>
                <Text style={styles.soyleyen}>-{rand.soyleyen}</Text>
            </View>
        </View>
    )
}
export default Kutu1;