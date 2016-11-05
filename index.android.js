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
import Camera from './js/Camera'
import Base from './js/Base';

export default class ispy extends Component {
  render() {
      var stuff = [
          [new Camera({deets:'http://smartersearches.com/wp-content/uploads/2015/05/puppy1.png'}), new Camera({deets:'https://static1.squarespace.com/static/548c7eede4b08dc69643de84/t/54e781dee4b0c9a277e2593e/1424458213583/testing123.png?format=1500w'})],
      ];
    return (
        <View style={styles.mainContainer}>
            <Base />
        </View>
    );
  }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

});

AppRegistry.registerComponent('ispy', () => ispy);
