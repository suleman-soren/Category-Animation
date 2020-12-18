import React, { Component } from 'react';
import {
    View,
    Text,
    Stylesheet
} from 'react-native';

export default class AuthorScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Home
                </Text>
            </View>
        )
    }
}