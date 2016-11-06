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
    TouchableHighlight,
    Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const SideMenu = require('react-native-side-menu');

import GridView from './GridView';
import Camera from './Camera'
import Menu from './Menu';
import CameraView from './CameraView';
import EventView from './EventView';


class iSpy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'iSpy',
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

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

    onScreenPush(name, navigator) {
        navigator.push({
            is: name
        });
    }

    onScreenPop(navigator) {
        navigator.pop();
    }

    /* Render the app */
    render() {
        return (
            <Navigator
                initialRoute={{id: 'GridView', passProps: {name: 'iSpy'}}}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

    renderScene(route, navigator) {
        var stuff = [
            [new Camera({deets:'http://smartersearches.com/wp-content/uploads/2015/05/puppy1.png', camNumber: 1})],
            [new Camera({deets:'http://smartersearches.com/wp-content/uploads/2015/05/puppy1.png', camNumber: 2})],
        ];
        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={navigator} />;
        var componentToRender = null;
        switch (route.id) {
            case 'GridView':
                componentToRender = <GridView itemMargins={3} itemsPerRow={2} data={stuff} navigator={navigator} />;
                console.log("component to render is GridView");
                break;
            case 'EventView':
                componentToRender = <EventView navigator={navigator} />;
                console.log("component to render is EventView");
                break;
            case 'CameraView':
                componentToRender = <CameraView navigator={navigator} route={route} />;
                break;
            default:
                break;
        }

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.container}>
                    <Icon.ToolbarAndroid
                        style={styles.toolbar}
                        title={route.passProps.name}
                        titleColor='#FFFFFF'
                        navIconName="navicon"
                        iconColor="#FFFFFF"
                        onIconClicked={() => this.toggle()}>
                    </Icon.ToolbarAndroid>
                    {componentToRender}
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
        height: 56,
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

export default iSpy;