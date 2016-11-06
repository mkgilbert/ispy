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

const window = Dimensions.get('window');

class CameraAlerts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text>Camera Name</Text>
                    <TextInput />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigator.pop()}
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
    },
    inputContainer: {
        alignItems: 'flex-start'
    },
    inputText: {
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

export default CameraAlerts;
