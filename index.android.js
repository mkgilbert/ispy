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
          <View style={styles.sidebar_element}/>
          <View style={styles.fillerLine}/>
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
			dataSource: ds.cloneWithRows(['f1', 'f2', '+']),
		};
	}

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) =>
					<View style={styles.sidebar_element}>
						<Text style={styles.sidebar_elementText}>{rowData}</Text>
					</View>
				}
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
  	sidebar_element: {
  		width: 38,
  		height: 38,
  		borderWidth: 2,
  		borderRadius: 5,
  		borderColor: "#000000",
      marginTop: 2
  	},
  	sidebar_elementText: {
  		marginLeft: 2
  	},
    fillerLine: {
      height: 1,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 2,
      marginBottom: 2
    }
});

AppRegistry.registerComponent('ispy', () => ispy);
