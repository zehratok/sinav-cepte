import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Font from '../Font';
import LottieView from 'lottie-react-native';
import Kutu from './KutuHeader';

class HeaderAnaSayfa extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Font />
                <View>
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
                            source={require('../../Assets/anaSayfaMenu.json')}
                            loop={false} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.kutu}>
                        <Kutu />
                </View>

            </View>
        )
    }
}
export default function (props) {
    const navigation = useNavigation();

    return <HeaderAnaSayfa {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderBottomRightRadius: 45,
        borderColor: '#68636b',
        backgroundColor: '#BE9FE1',
    },
    lottie: {
        padding: Dimensions.get('window').width / 120,
        width: 35,
        height: 35
    },
    kutu: {
        flex: 1,
        alignContent: 'space-around',
        marginBottom: Dimensions.get('window').height / 80,
        backgroundColor: '#BE9FE1',
        borderRadius: 45,
    },
    icon: {
        marginTop: Dimensions.get('window').height / 45,
        marginLeft: Dimensions.get('window').width / 25,
        marginRight: Dimensions.get('window').width / 30,
        fontSize: Dimensions.get('window').width / 10,
        color: 'white',
    },
    metin: {
        flex: 1,
        marginTop: Dimensions.get('window').height / 45,
    },
    merhaba: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: Dimensions.get('window').width / 25,
        color: 'white',
    },
    soz: {
        fontFamily: 'Ubuntu_400Regular_Italic',
        fontSize: Dimensions.get('window').width / 30,
        color: '#F1F1F6',
        justifyContent: 'flex-end'
    },
    soyleyen: {
        flex: 1,
        alignSelf: 'flex-end',
        marginRight: Dimensions.get('window').width / 99,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: Dimensions.get('window').width / 30,
        color: '#F1F1F6',
    },
})