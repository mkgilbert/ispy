import React, { Component } from 'react';
import {
    AppRegistry,
    TouchableNativeFeedback,
    StyleSheet,
    Text,
    View,
    ScrollView,
    BackAndroid,
    Image,
    TouchableOpacity
} from 'react-native';
import Menu from './Menu';

const SideMenu = require('react-native-side-menu');

class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

class Base extends Component {
    state = {
        isOpen: false,
        selectedItem: 'About',
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    };

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View>
                    <Text>
                        Welcome to React Native!
                    </Text>
                    <Text>
                        Current selected menu item is: {this.state.selectedItem}
                    </Text>
                </View>
                <Button onPress={() => this.toggle()}>
                    <Image
                        source={require('../assets/menu.png')} style={{width: 32, height: 32}} />
                </Button>
            </SideMenu>
        );
    }
};

export default Base;