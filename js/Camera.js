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
    View
} from 'react-native';

export class Camera extends Component {
    constructor(props){
        super(props);
        this.state = {
            deets: this.props.deets,
        }
    }

    render() {
        return(
            <Image style={{flex:1}}source={{uri: this.state.deets}}/>
        );
    }
}

export default Camera;
