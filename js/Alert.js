/**
 * Created by mkg on 11/13/2016.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    ListView,
    StyleSheet,
    Switch,
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
            isEnabled: this.props.enabled != null ? this.props.enabled : true,
            type: this.props.type
        }
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }

    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.text}>{this.state.type}</Text>
                    <Switch
                        onValueChange={(value)=>this.setState({isEnabled: value})}
                        value={this.state.isEnabled}
                    />
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
        fontSize: 16,
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