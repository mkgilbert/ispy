import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    ListView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export class GridView extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var data = Array.apply(null, {length:20}).map(Number.call, Number);
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    render() {
        return(
            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <Text style={styles.item}>{rowData}</Text>
                }
            />
        );
    }
}

var styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100
    }
});

export default GridView