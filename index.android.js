/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ispy extends Component {
  render() {
    return (
    	<View style={styles.mainContainer}>
    		<View style={styles.sidebar}>
    			<MyComponent/>
    		</View>
    		<View style={styles.content}>
    			<Text>Testing.</Text>
    			<Text>Testing.</Text>
    			<Text>Testing.</Text>
    			<Text>Testing.</Text>
    		</View>
    	</View>
    );
  }
}

class MyComponent extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2']),
		};
	}

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
		);
	}
}

const styles = StyleSheet.create({
	sidebar: {
  		flexDirection: 'column'
  	},
  	mainContainer: {
    	flex: 1,
    	flexDirection: 'row'
  	},
  	content: {
  		flex: 1
  	},
});

AppRegistry.registerComponent('ispy', () => ispy);
