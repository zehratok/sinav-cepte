import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Font from '../Font';
import LottieView from 'lottie-react-native';
import { MaterialIcons } from '@expo/vector-icons';

class HeaderButon extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Font />
                <View style={styles.header}>
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
                            source={require('../../Assets/menu.json')}
                            loop={false} />
                    </TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.baslik}>  {this.props.baslik} </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buton}
                    onPress={this.props.onPress}
                >
                    <MaterialIcons name={this.props.icon} size={40} color='#BE9FE1' style={{ alignSelf: 'center' }} />
                </TouchableOpacity>

            </View >
        )
    }
}

export default function (props) {
    const navigation = useNavigation();

    return <HeaderButon {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 8,
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        flex: 1

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
    buton: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 1
    },


})