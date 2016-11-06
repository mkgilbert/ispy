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
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');

class CameraView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let camData = this.props.route.passProps.camData;
        return (
            <View style={styles.container}>
                <Image style={styles.camera} source={{uri: camData.deets}} />
                <TouchableHighlight style={styles.button}>
                    <Text>Settings</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>Alerts</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
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
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        width: 70,
        height: 70,
        margin: 15,
        backgroundColor: 'grey'
    }
});

export default CameraView;
