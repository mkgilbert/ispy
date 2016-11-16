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
import Camera from './Camera'

var window = Dimensions.get('window');

class CameraView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            camIndex:this.props.route.passProps.camIndex,
            camData:this.props.store.getState().cameras[this.props.route.passProps.camIndex].state
        };
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps() {
        this.setState({
            camIndex:this.props.route.passProps.camIndex,
            camData:this.props.store.getState().cameras[this.state.camIndex].state
        });
    }

    buildRoute(screenName, name) {
        let route = {
            id: screenName,
            passProps: {
                camIndex: this.state.camIndex,
                name: this.state.camData.name + ' ' + name
            }
        };
        return route;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.camera}>
                    <Camera name={this.state.camData.name} source={this.state.camData.source} port={this.state.camData.port}/>
                </View>
                <Icon name="camera" size={25} style={{padding: 5, alignSelf: 'flex-end'}} />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigator.push(this.buildRoute('CameraSettings', 'Settings'))}>
                        <View style={styles.buttonView}>
                            <Icon name="gear" size={40} color="white"/>
                            <Text style={styles.buttonViewContent}>Settings</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigator.push(this.buildRoute('CameraAlerts', 'Alerts'))}>
                        <View style={styles.buttonView}>
                            <Icon name="bell" size={40} color="white"/>
                            <Text style={styles.buttonViewContent}>Alerts</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigator.push(this.buildRoute('EventView', 'Events'))}>
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
        width: window.width < window.height ? window.width : window.height,
        height: window.width < window.height ? window.width : window.height,
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
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
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
