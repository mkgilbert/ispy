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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class GridView extends Component {
    constructor(props) {
        super(props);
        var {width, height} = Dimensions.get('window');
        var margins = ((this.props.itemMargins!=null) ? this.props.itemMargins : 0);
        var data = this.formatData(this.props.data.getState().cameras, this.props.itemsPerRow);
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
            dataSource: ds.cloneWithRows(data),
            styles: styles,
        };
    }

    componentWillReceiveProps(nextProps){
        console.log("Gridview received Props.");
        this.setState({
            itemMargins: ((this.props.itemMargins!=null) ? this.props.itemMargins : 0),
            itemsPerRow: this.props.itemsPerRow,
            dataSource: ds.cloneWithRows(this.formatData(this.props.data.getState().cameras, this.props.itemsPerRow)),
        });
    }

    formatData(data, itemsPerRow){
        var formattedData = [];
        var elements = data.length;
        var numRows = Math.ceil(elements/itemsPerRow);
        for (r=0; r<numRows; r++){
            formattedData[r] = [];
            for(c=0; c<itemsPerRow; c++){
                if(elements==0) return formattedData;
                formattedData[r][c] = data[r*itemsPerRow+c];
                elements = elements - 1;
            }
        }
        return formattedData;
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
                    <TouchableHighlight
                        key={i}
                        style={[this.state.styles.item, this.calculateSize()]}
                        onPress={() => this.props.navigator.replace({
                            id: 'CameraView',
                            passProps: {
                                index:rowID*this.state.itemsPerRow+i
                            }
                        })}>
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