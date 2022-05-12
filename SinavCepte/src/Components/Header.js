import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Font from './Font';
import LottieView from 'lottie-react-native';

class Header extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Font />
                <TouchableWithoutFeedback
                    style={styles.icon}
                    onPress={() => {
                        this.play_btn.play(),
                            navigation.toggleDrawer()
                    }}
                >
                    <LottieView 
                        style={styles.lottie}
                        ref={animation => {
                            this.play_btn = animation;
                        }}
                        source={require('../Assets/menu.json')}
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

    return <Header {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 8
    },
    baslik: {
        left: 5,
        color: 'white',
        fontSize: 25,
        fontFamily: 'Ubuntu_500Medium',
        marginTop: 8,
    },
    lottie: {
        padding: Dimensions.get('window').width / 120,
        width: 35,
        height: 35
    },
})