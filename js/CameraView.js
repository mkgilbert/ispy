/**
 * Created by mkg on 11/5/2016.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

const window = Dimensions.get('window');

class CameraView extends Component {
    constructor(props) {
        super(props);
        this.cameraNumber = 0; /// TODO: ?????? How should we determine which camera is being shown?
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.camera}>Camera view</Text>
                <TouchableHighlight>
                    <Text>Settings</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Alerts</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Events</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        width: window.width,
        height: window.width,
        backgroundColor: 'grey',
    }
});

export default CameraView;
