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
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hr from 'react-native-hr';
import Alert from './Alert';

var window = Dimensions.get('window');

class CameraAlerts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.text}>Type         </Text>
                    <Text style={styles.text}>Off/On</Text>
                    <Text style={styles.text}>Delete</Text>
                </View>
                <View style={styles.list}>
                    <Alert type="Motion Det"/>
                    <Hr lineColor="grey"/>
                    <Alert type="Power Fail" />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigator.pop()}>
                        <Icon name="plus-circle" size={75} color="orange"/>
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30
    },
    inputContainer: {
        alignItems: 'flex-start'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    list: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 5
    },
    button: {
        alignSelf: 'flex-end'
    },
    buttonContent: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default CameraAlerts;
