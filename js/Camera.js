/**
 * Created by Tanner Stevens on 11/1/2016.
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
} from 'react-native';

export class Camera extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            source: this.props.source,
            port: this.props.port
        }
    }

    render() {
        return(
            <Image style={{flex:1}} source={{uri: this.state.source}}/>
        );
    }
}

export default Camera;
