import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import base64 from 'react-native-base64';

const ResimDetay = (props) => {
    const { resim } = props.route.params;

    const res = base64.encodeFromByteArray(resim, Uint8Array);

    return (
        <ScrollView style={{
            flex: 1,
            display: 'flex',
        }}>
            <View style={{
                marginTop:50,
                flex:1,
                alignSelf:'center',
                alignItems: 'center',
                width: 400,
                height: 500,
                overflow: 'hidden',
            }}>
                <Image
                    style={{
                        flex: 1,
                        width: 400,
                        height: 500,
                        position: 'absolute'
                    }}
                    source={{
                        uri: `data:image/png;base64, ${res}`
                    }} />
            </View>
        </ScrollView>
    )
}

export default ResimDetay

const styles = StyleSheet.create({})