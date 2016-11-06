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
    TouchableHighlight,
    Image
} from 'react-native';

const window = Dimensions.get('window');

class CameraView extends Component {
    constructor(props) {
        super(props);
        this.cameraNumber = 0; /// TODO: ?????? How should we determine which camera is being shown?
    }

    render() {
        let camData = this.props.route.passProps.camData;
        return (
            <View style={styles.container}>
                <Image style={styles.camera} source={{uri: camData.deets}} />
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
        width: window.width,
        height: window.width,
        backgroundColor: 'grey',
    }
});

export default CameraView;
