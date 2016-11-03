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
import Icon from 'react-native-vector-icons/FontAwesome'

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
                <View style={styles.container}>
                    <Icon.ToolbarAndroid
                        style={styles.toolbar}
                        title="iSpy"
                        navIconName="navicon"
                        onIconClicked={() => this.toggle()}
                    />
                    <Text style={styles.instructions}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        Current selected menu item is: {this.state.selectedItem}
                    </Text>
                </View>

            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 40,
        backgroundColor: '#424242',
    },
    centerText: {
        textAlign: 'center',
        margin: 20,
        fontSize: 30,
    },

    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Base;