/**
 * Created by mkg on 11/16/2016.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class CameraAlertsHeader extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Type         </Text>
                <Text style={styles.text}>   Off/On</Text>
                <Text style={styles.text}>Delete</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E0E0E0',
        padding: 20
    },
    inputContainer: {
        alignItems: 'flex-start'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E'
    },
    list: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15
    },

});

export default CameraAlertsHeader;