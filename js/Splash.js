/**
 * Created by mkg on 11/16/2016.
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

var window = Dimensions.get('window');

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>iSpy</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {this.props.navigator.push({id: "GridView", passProps: {name: "iSpy"}})}}
                    underlayColor="#EF6C00">
                    <Text style={styles.buttonContent}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: window.width,
    },
    title: {
        fontSize: 52,
        fontWeight: "bold",
        margin: 50
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

export default Splash;
