/**
 * Created by mkg on 11/6/2016.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    ListView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hr from 'react-native-hr';
import Alert from './Alert';
import CameraAlertsHeader from './CameraAlertsHeader';

var window = Dimensions.get('window');


class CameraAlerts extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        var filtered = this.props.store.getState().alerts.filter(this.filterAlerts, this);
        console.log(filtered);

        this.state = {
            camIndex: this.props.route.passProps.camIndex,
            alerts: this.props.store.getState().alerts.filter(this.filterAlerts, this),
            dataSource: ds.cloneWithRows(filtered),
        };
        console.log(this.state);
        this.unsubscribe = this.props.store.subscribe(()=>{
            this.setState({
                alerts: this.props.store.getState().alerts.filter(this.filterAlerts, this),
            });
        });
    }

    filterAlerts(t){
        if (t.camIndex!=this.props.route.passProps.camIndex) return false;
        return true;
    }

    componentDidMount() {
        window = Dimensions.get('window');
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    buildRoute(screenName, name) {
        let route = {
            id: screenName,
            passProps: {
                camIndex: this.props.route.passProps.camIndex,
                name: name
            }
        };
        return route;
    }

    renderRow(rowData) {
        return (
            <View style={styles.list}>
                <Alert type={rowData.eventType} enabled={true}/>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                renderHeader={() => <CameraAlertsHeader />}
            />
            <TouchableHighlight
                style={styles.button}
                onPress={() => this.props.navigator.push(this.buildRoute('AlertAdd', 'Add Alert'))}>
                <Icon name="plus-circle" size={75} color="orange"/>
            </TouchableHighlight>
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
        margin: 30
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
        marginLeft: 20,
        marginRight: 20
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 5
    },
    button: {
        margin: 5,
        alignSelf: 'flex-end'
    },
    buttonContent: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default CameraAlerts;
