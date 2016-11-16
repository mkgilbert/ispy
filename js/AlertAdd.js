/**
 * Created by mkg on 11/13/2016.
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
import ModalDropDown from 'react-native-modal-dropdown';

import { addAlert } from './re_actions'

var window = Dimensions.get('window');
const alert_types = ['Motion Det', 'Power Fail'];

class AlertAdd extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.route.passProps.camIndex)
        this.state = {
            type: '',
            email:''
        };
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    dropdownOnSelect(idx, value) {
        this.setState({
            type: value
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Alert Type</Text>
                    <ModalDropDown
                        options={alert_types}
                        onSelect={(idx, value) => this.dropdownOnSelect(idx, value)}/>
                    <Text style={styles.text}>Email Address</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                    />
                </View>
                <Text>{this.props.route.passProps.camIndex}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.store.dispatch(addAlert(
                                this.props.route.passProps.camIndex,
                                this.state.type,
                                this.state.email,
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

export default AlertAdd;
