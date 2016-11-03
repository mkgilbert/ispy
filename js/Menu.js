import React, { Component } from 'react';
import {
    AppRegistry,
    TouchableNativeFeedback,
    StyleSheet,
    Text,
    View,
    ScrollView,
    BackAndroid
} from 'react-native';


class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false}>
                <View>
                    <Text>Your name</Text>
                </View>

                <Text
                    onPress={() => this.props.onItemSelected('About')}>
                    About
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('Contacts')}>
                    Contacts
                </Text>
            </ScrollView>
        );
    }

    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };
}

export default Menu;