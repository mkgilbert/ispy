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
    TouchableHighlight
} from 'react-native';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/FontAwesome'

const SideMenu = require('react-native-side-menu');


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
                        title='iSpy'
                        titleColor='#FFFFFF'
                        navIconName="navicon"
                        iconColor="#FFFFFF"
                        onIconClicked={() => this.toggle()}>
                    </Icon.ToolbarAndroid>
                    <Text>
                        Welcome to React Native!
                    </Text>
                    <Text>
                        Current selected menu item is: {this.state.selectedItem}
                    </Text>
                </View>

            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center'
    },
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
        backgroundColor: 'blue',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },

});

export default Base;