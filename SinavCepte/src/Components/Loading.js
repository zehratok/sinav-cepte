import React from 'react'
import LottieView from 'lottie-react-native';
class Loading extends React.Component {
    componentDidMount() {
         this.animation.play(0, 150);
    }
    resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
    }; render() {
        return (
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../Assets/loading.json')} />
        )
    }
}

export default Loading
