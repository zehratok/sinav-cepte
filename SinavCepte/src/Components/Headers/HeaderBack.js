import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Font from '../Font';
import LottieView from 'lottie-react-native';

class HeaderBack extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Font />
                <TouchableWithoutFeedback
                    style={styles.icon}
                    onPress={() => {
                        this.play_btn.play(),
                            navigation.goBack()
                    }}
                >
                    <LottieView
                        style={styles.lottie}
                        ref={animation => {
                            this.play_btn = animation;
                        }}
                        source={require('../../Assets/back.json')}
                        loop={false} />
                </TouchableWithoutFeedback>
                <View>
                    <Text style={styles.baslik}>  {this.props.baslik} </Text>
                </View>
            </View >
        )
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <HeaderBack {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 8
    },
    baslik: {
        right: 45,
        color: 'white',
        fontSize: 25,
        fontFamily: 'Ubuntu_500Medium',
        top:2
    },
    lottie: {
        right: 10,
        bottom: 10,
        padding: Dimensions.get('window').width / 120,
        width: 70,
        height: 70
    },
})