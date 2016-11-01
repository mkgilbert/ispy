/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GridView from './js/GridView';

export default class ispy extends Component {
  render() {
    return (
        <View style={styles.mainContainer}>
            <GridView />
        </View>
    );
  }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('ispy', () => ispy);
