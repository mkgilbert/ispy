import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export class GridView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // Use AsyncStorage + Json Library to store Camera Stats and load them when we need them
        var {width, height} = Dimensions.get('window');
        var margins = ((this.props.itemMargins!=null) ? this.props.itemMargins : 0);
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
                margin: margins
            }
        });
        this.state = {
            screenWidth: width,
            screenHeight: height,
            itemMargins: margins,
            itemsPerRow: this.props.itemsPerRow,
            dataSource: ds.cloneWithRows(this.props.data),
            styles: styles
        };
    }

    calculateSize() {
        //Shift is to account for Margins on both horizontal sides of each Item
        var shift = (this.state.itemMargins*2)*this.state.itemsPerRow;
        var size = (this.state.screenWidth-shift) / this.state.itemsPerRow;
        return ({width:size, height:size});
    }

    renderRow(rowData, sectionID, rowID) {
        var elements = rowData.map(
            (data, i) => {
                return(
                    <TouchableHighlight key={i} style={[this.state.styles.item, this.calculateSize()]}>
                        {data.render()}
                    </TouchableHighlight>
                );
            }
        );
        return (
            <View style={this.state.styles.row}>
                {elements}
            </View>
        );
    }
    render() {
        return(
            <ListView
                contentContainerStyle={this.state.styles.list}
                dataSource={this.state.dataSource}
                initialListSize={20}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

export default GridView