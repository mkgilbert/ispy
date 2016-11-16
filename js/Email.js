/**
 * Created by mkg on 11/16/2016.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Linking
} from 'react-native';

export class Email extends Component {
    constructor(props){
        super(props);
        this.state = {
            camId: this.props.camId,
            email: this.props.email,
            event: this.props.event
        };
        Linking.openURL('mailto:mike@nau.edu?subject=testing?body=test test test').catch(err => console.error('problem sending email', err));
    }

    componentDidMount() {
        Linking.openURL('mailto:mike@nau.edu?subject=testing?body=test test test').catch(err => console.error('problem sending email', err));
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps);
    }

}

export default Email;
