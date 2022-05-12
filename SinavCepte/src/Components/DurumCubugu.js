import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const DurumCubugu = () => {
    return (
        <SafeAreaView>
            <StatusBar animated={true}
                backgroundColor='#BE9FE1'
                barStyle='default'
                showHideTransition='slide'
            />
        </SafeAreaView>
    )
}

export default DurumCubugu;