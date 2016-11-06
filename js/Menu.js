import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    TouchableNativeFeedback,
    StyleSheet,
    Text,
    View,
    ScrollView,
    BackAndroid,
    TouchableHighlight
} from 'react-native';
import Hr from 'react-native-hr';

import GridView from './GridView';
import EventView from './EventView';

const window = Dimensions.get('window');

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onScreenPush(name, navigator) {
        navigator.push({
            id: name,
        });
    }

    onScreenPop(navigator) {
        navigator.pop();
    }

    closeAndReplace(screenName){
        this.props.onItemSelected(screenName);
        this.props.navigator.replace({ id: screenName });
    };

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <Text style={styles.menuTitle}>Menu</Text>
                <Hr lineColor='#FFFFFF' />
                <TouchableHighlight onPress={() => this.closeAndReplace('GridView')}
                    underlayColor='grey'
                    style={styles.menuButton}>
                    <Text style={styles.item}>Cameras</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.closeAndReplace('EventView')}
                    underlayColor='grey'
                    style={styles.menuButton}>
                    <Text style={styles.item}>Events</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }

    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '#424242',
        paddingTop: 20,
    },
    menuButton: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    menuTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#FFFFFF',
        marginBottom: 20,
        paddingLeft: 10,
    },
    item: {
        fontSize: 18,
        fontWeight: '300',
        paddingLeft: 10,
        color: '#FFFFFF',
    },
});

export default Menu;