import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import { useSelector } from 'react-redux';

const GidenMesaj = (props) => {
    const kullanici = useSelector(s => s.data);
    const id= props.id;
    
function handleMesajSil() {
    
}
    function mesaj() {
        if (id == kullanici.id) {
            return (
                <TouchableOpacity style={styles.container}
                    onPress={handleMesajSil}
                    onLongPress={props.onLongPress}>
                    <View>
                        <Text style={styles.icerik}> {props.icerik} </Text>
                    </View>
                    <View>
                        <Text style={styles.zaman}> {(props.zaman).slice(0, 5)} </Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View>
            <Font />
            {
                mesaj()
            }
        </View>
    )
}

export default GidenMesaj

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#f4effa',
        borderRadius: 25,
        borderBottomRightRadius: 0,
        marginHorizontal: 10,
        alignSelf:'flex-end',
        marginVertical: 5,
        maxWidth: (Dimensions.get('window').width / 2) + 150,
        minWidth: (Dimensions.get('window').width / 5) + 15,
        justifyContent: 'flex-end'
    },
    icerik: {
        color: '#9c83b8',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    zaman: {
        color: '#c9afe6',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium',
        marginBottom: 5,
        marginRight: 10,
        alignSelf:'flex-end'
    },
})