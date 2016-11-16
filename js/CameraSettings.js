/**
 * Created by mkg on 11/6/2016.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    ListView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import { modifyCameraSettings } from './re_actions'

var window = Dimensions.get('window');

class CameraSettings extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.store.getState().cameras[this.props.route.passProps.camIndex].state;
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                    />
                    <Text style={styles.text}>URL / IP Address</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='url'
                        onChangeText={(text) => this.setState({source: text})}
                        value={this.state.source}
                    />
                    <Text style={styles.text}>Port</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({port: text})}
                        value={this.state.port}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            console.log(this.props.route.passProps.camIndex);
                            this.props.store.dispatch(modifyCameraSettings(
                                    this.props.route.passProps.camIndex,
                                    this.state.name,
                                    this.state.source,
                                    this.state.port
                                    )
                                );
                            this.props.navigator.pop();
                        }}
                        underlayColor="#EF6C00">
                        <Text style={styles.buttonContent}>Save</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: window.width,
    },
    inputContainer: {
        alignItems: 'flex-start',
        padding: 5
    },
    textInput: {
        height: 40,
        width: window.width - 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        width: window.width / 2,
        height: 45,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'orange'
    },
    buttonContent: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default CameraSettings;
