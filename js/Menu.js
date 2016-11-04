import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    TouchableNativeFeedback,
    StyleSheet,
    Text,
    View,
    ScrollView,
    BackAndroid
} from 'react-native';
import Hr from 'react-native-hr';

const window = Dimensions.get('window');

class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <Text style={styles.menuTitle}>Menu</Text>
                <Hr lineColor='#FFFFFF' />
                <Text
                    onPress={() => this.props.onItemSelected('About')}
                    style={styles.item}>
                    About
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('Contacts')}
                    style={styles.item}>
                    Contacts
                </Text>
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
        paddingTop: 10,
        paddingLeft: 10,
        alignItems: 'center',
        color: '#FFFFFF',
    },
});

export default Menu;