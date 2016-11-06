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
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}>
                        <View style={styles.buttonView}>
                            <Icon name="gear" size={40} color="white"/>
                            <Text style={styles.buttonViewContent}>Settings</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}>
                        <View style={styles.buttonView}>
                            <Icon name="bell" size={40} color="white"/>
                            <Text style={styles.buttonViewContent}>Alerts</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}>
                        <View style={styles.buttonView}>
                            <Icon name="calendar-o" size={40} color="white"/>
                            <Text style={styles.buttonViewContent}>Events</Text>
                        </View>
                    </TouchableHighlight>
                </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        padding: 15,
    },
    button: {
        width: 75,
        height: 75,
        margin: 15,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#888888'
    },
    buttonView: {
        alignItems: 'center',
    },
    buttonViewContent: {
        color: 'white',
    }
});

export default CameraView;
