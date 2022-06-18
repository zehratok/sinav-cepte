import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import base64 from 'react-native-base64';

const ResimDetay = (props) => {
    const { resim } = props.route.params;

    const res = base64.encodeFromByteArray(resim, Uint8Array) ;

    return (
        <ScrollView style={{
            flex: 1,
            display: 'flex',
        }}>
            <Image
                style={{
                    width: Dimensions.get('window').width,
                    height: (Dimensions.get('window').height) - 50,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
                source={{
                    uri: `data:image/png;base64, ${res}`
                }} />
        </ScrollView>
    )
}

export default ResimDetay

const styles = StyleSheet.create({})