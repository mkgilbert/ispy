import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    TouchableNativeFeedback,
    StyleSheet,
    Text,
    View,
    ScrollView,
    BackAndroid,
    Image,
    TouchableHighlight,
    Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const SideMenu = require('react-native-side-menu');
import GridView from './GridView';
import Menu from './Menu';
import CameraView from './CameraView';
import EventView from './EventView';
import CameraAdd from './CameraAdd';
import CameraSettings from './CameraSettings';
import CameraAlerts from './CameraAlerts';
import PuppetMaster from './PuppetMaster';
import AlertAdd from './AlertAdd';
import { addCamera, removeCamera, modifyCameraSettings, addEvent, EventTypes, addAlert } from './re_actions'
import { createStore } from 'redux'
import reducers from './re_reducers'

let store = createStore(reducers);
var window = Dimensions.get('window');

class iSpy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'iSpy',
        };
        this.puppetMaster = new PuppetMaster(store);

        this.unsubscribe = store.subscribe(()=>console.log(store.getState()));
        store.dispatch(addCamera('Camera1', 'http://smartersearches.com/wp-content/uploads/2015/05/puppy1.png', '22'));
        store.dispatch(addCamera('Camera2', 'http://pprtravelnursing.com/wp-content/uploads/sites/4/2014/05/EBSLogo.jpg', '69'));
        store.dispatch(addCamera('Camera3', 'http://wonderfulwoodworkings.com/wp-content/uploads/2016/08/everything-checks-out.png', '42'));
        store.dispatch(removeCamera(1));
        store.dispatch(modifyCameraSettings(0, 'l33t', 'http://www.endlessimpact.com/wp-content/uploads/2014/07/testings.jpg', '01'));
        store.dispatch(addCamera('Living Room', 'https://f4.bcbits.com/img/a0964464426_16.jpg', '420'));
        store.dispatch(addEvent(0, EventTypes.CAMERA_ON));
        store.dispatch(addEvent(1, EventTypes.CAMERA_ON));
        store.dispatch(addEvent(2, EventTypes.CAMERA_ON));
        store.dispatch(addEvent(0, EventTypes.CAMERA_OFF));
        store.dispatch(addEvent(0, EventTypes.CAMERA_ON));
        store.dispatch(addAlert(0, 'aklsdklasdklasm', EventTypes.CAMERA_OFF));
        store.dispatch(addAlert(0, 'aklsdklasdklasm', EventTypes.CAMERA_ON));
    }

    componentDidMount() {
        this.puppetMaster.startRolling();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    };

    /* Render the app */
    render() {
        return (
            <Navigator
                initialRoute={{id: 'GridView', passProps: {name: 'iSpy'}}}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

    renderScene(route, navigator) {
        var navIcon = 'navicon';
        var showBars = true;
        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={navigator} />;
        var componentToRender = null;

        //Bandaid Fix
        if(route.id==='CameraView' && route.passProps.camIndex>-1){
            route.passProps.name = store.getState().cameras[route.passProps.camIndex].state.name
        }

        switch (route.id) {
            case 'GridView':
                componentToRender =
                    <View style={{flex:1}}>
                        <GridView itemMargins={3} itemsPerRow={2} data={store} navigator={navigator} />
                        <Icon name="camera" size={35} style={{padding: 5, alignSelf: 'flex-end'}}
                            onPress={()=>{
                                navigator.push({id:'CameraAdd',
                                                passProps:{
                                                    name: 'Add Camera'
                                                }})
                            }}/>
                    </View>;
                console.log("component to render is GridView");
                break;
            case 'EventView':
                componentToRender = <EventView store={store} navigator={navigator} route={route}/>;
                if(route.passProps.camIndex!=null){
                    navIcon = 'arrow-left';
                    showBars = false;
                }
                console.log("component to render is EventView");
                break;
            case 'CameraView':
                componentToRender = <CameraView store={store} navigator={navigator} route={route} />;
                console.log("CameraView");
                break;
            case 'CameraAdd':
                componentToRender = <CameraAdd store={store} navigator={navigator} route={route}/>
                navIcon = 'arrow-left';
                showBars = false;
                break;
            case 'CameraSettings':
                componentToRender = <CameraSettings store={store} navigator={navigator} route={route} />;
                console.log("CameraSettings");
                navIcon = 'arrow-left';
                showBars = false;
                break;
            case 'CameraAlerts':
                componentToRender = <CameraAlerts store={store} navigator={navigator} route={route} />;
                navIcon = 'arrow-left';
                showBars = false;
                break;
            case 'AlertAdd':
                componentToRender = <AlertAdd store={store} navigator={navigator} route={route} />
                navIcon = 'arrow-left';
                showBars = false;
                break;
            default:
                break;
        }

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.container}>
                    <Icon.ToolbarAndroid
                        style={styles.toolbar}
                        title={route.passProps.name}
                        titleColor='#FFFFFF'
                        navIconName={navIcon}
                        iconColor="#FFFFFF"
                        onIconClicked={() => {showBars === true ? this.toggle() : navigator.pop()}}>
                    </Icon.ToolbarAndroid>
                    {componentToRender}
                </View>

            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbar: {
        height: 56,
        backgroundColor: '#424242',
    },
    centerText: {
        textAlign: 'center',
        margin: 20,
        fontSize: 30,
    },
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
        backgroundColor: 'blue',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },

});

export default iSpy;