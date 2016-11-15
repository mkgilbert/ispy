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
import Icon from 'react-native-vector-icons/FontAwesome';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: this.props.enabled!=null ? this.props.enabled : true,
            type: this.props.type
        }
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    setEnabled(bool) {
        this.setState({
            isEnabled: bool
        });
    }
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.text}>{this.state.type}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.setEnabled(!this.state.isEnabled)}>
                        {this.state.isEnabled ? <Icon name="toggle-on" size={35} />
                         : <Icon name="toggle-off" size={35}/>}
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}>
                        <Icon name="trash" size={35} />
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        justifyContent: 'flex-start',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20
    },

    button: {
        justifyContent: 'flex-end',
        marginTop: 20,
        marginBottom: 20
    }
});

export default Alert;