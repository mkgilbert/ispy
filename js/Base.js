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
import Icon from 'react-native-vector-icons/FontAwesome'
const SideMenu = require('react-native-side-menu');

import GridView from './GridView';
import Camera from './Camera'
import Menu from './Menu';
import EventView from './EventView';


class Base extends Component {
    state = {
        isOpen: false,
        selectedItem: 'iSpy',
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
        var stuff = [
            [new Camera({deets:'http://smartersearches.com/wp-content/uploads/2015/05/puppy1.png'})],
            [new Camera({deets:'http://smartersearches.com/wp-content/uploads/2015/05/puppy1.png'})],
        ];
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.container}>
                    <Icon.ToolbarAndroid
                        style={styles.toolbar}
                        title={this.state.selectedItem}
                        titleColor='#FFFFFF'
                        navIconName="navicon"
                        iconColor="#FFFFFF"
                        onIconClicked={() => this.toggle()}>
                    </Icon.ToolbarAndroid>
                    { this.state.selectedItem == 'Cameras' ?
                        <GridView itemMargins={3} itemsPerRow={2} data={stuff}/>
                        : <EventView />
                    }
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