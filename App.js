import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

class BlinkingText extends Component {
    constructor(props) {
        super(props);
        this.props.state = {displayText: true};

        setInterval(() => {
            this.setState(previousState => {
                return { displayText: !previousState.displayText };
            });
        }, 500);
    }

    render() {
        //let display = { uri: (this.props.displayText ? this.props.image: "") };
        let display = { uri: this.props.image };

        return (
            <Image source={display} style={{width: 300, height: 300}}/>
        );
    };
}

export default class App extends Component {
    render() {
        return (
            <View>
                <BlinkingText image="https://gifyu.com/images/060202.gif"/>
            </View>
        );
    };
}

AppRegistry.registerComponent('PantryPal', () => App);
