/**
 * Created by mkg on 11/5/2016.
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

class EventView extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.store.getState();
        console.log(this.state);
    }

    render() {
        var eventLog = this.state.events.map(
            (data, i) => {
                console.log(data.cameraID);
                return(
                    <Text key={i}>{this.state.cameras[data.cameraIndex].state.name}: {data.eventType}</Text>
                );
            }
        , this);
        return (
            <View>
                {eventLog}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default EventView;