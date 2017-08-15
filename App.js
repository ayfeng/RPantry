import React, { Component } from 'react';
import { Text, AppRegistry, StyleSheet, View } from 'react-native';

export default class StyleTest extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            red: {
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 38
            }
        });
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={this.styles.red}>Hello World in Red</Text>
            </View>
        );
    };
}

AppRegistry.registerComponent('PantryPal', () => StyleTest);
