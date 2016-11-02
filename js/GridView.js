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
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.image),
        };
    }

    renderRow(rowData, sectionID, rowID) {
        var elements = rowData.map(
            (data, i) => {
                return(
                    <View key={i} style={styles.item}>
                        <Text>{data}</Text>
                    </View>
                );
            }
        );
        return (
            <View style={styles.row}>
                {elements}
            </View>
        );
    }
    render() {
        return(
            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                initialListSize={20}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

var styles = StyleSheet.create({
    list: {
        flexWrap:'wrap'
    },
    row: {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    item: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
        margin: 3
    }
});

export default GridView