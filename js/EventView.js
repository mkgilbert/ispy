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
        this.camIndex = ((this.props.route.passProps.camIndex!=null) ? this.props.route.passProps.camIndex : -1 );
        this.unsubscribe = this.props.store.subscribe(()=>{
            this.setState(this.props.store.getState());
            }
            ,this)
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        var events = this.state.events;
        if (this.camIndex!=-1){
            events = events.filter((t)=> {
                    return t.camIndex==this.camIndex;
                }
            , this);
        }
        var eventLog = events.map(
            (data, i) => {
                return(
                    <Text key={i}>{this.state.cameras[data.camIndex].state.name}: {data.eventType}</Text>
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