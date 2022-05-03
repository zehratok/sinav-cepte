import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const DurumCubugu = () => {
    return (
        <SafeAreaView>
            <StatusBar animated={true}
                backgroundColor="#F1F1F6"
                barStyle='default'
                showHideTransition='slide'
            />
        </SafeAreaView>
    )
}

export default DurumCubugu;