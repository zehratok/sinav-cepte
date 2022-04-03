import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

const Profil = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Text>Profil</Text>
            <Button
                title='ÇIKIŞ YAP'
                onPress={() => dispatch({ type: 'SET_USER', payload: { user: null } })} />
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({})