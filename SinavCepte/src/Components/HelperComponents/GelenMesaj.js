import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Font from '../Font'
import { useSelector } from 'react-redux';

const GelenMesaj = (props) => {
    const kullanici = useSelector(s => s.data);

    function mesaj() {
        if (props.id != kullanici.id) {
            return (
                <TouchableOpacity style={styles.container}
                    onPress={props.onPress}
                    onLongPress={props.onLongPress}>

                    <View>
                        <Text style={styles.baslik}> {props.baslik} </Text>
                    </View>
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

export default GelenMesaj

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#7a6790',
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        marginHorizontal: 10,
        marginVertical: 5,
        maxWidth: (Dimensions.get('window').width / 2) + 150,
        minWidth: (Dimensions.get('window').width / 5) + 15,
        alignSelf: 'flex-start'
    },
    baslik: {
        color: '#BE9FE1',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    icerik: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium_Italic',
        marginLeft: 16,
        marginRight: 10,
    },
    zaman: {
        color: '#c9afe6',
        fontSize: 13,
        fontFamily: 'Ubuntu_500Medium',
        alignSelf: 'flex-end',
        marginBottom: 3,
        marginRight: 15,
    },

})