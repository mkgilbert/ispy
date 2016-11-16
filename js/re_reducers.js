/**
 * Created by Tanner Stevens on 11/8/2016.
 */

import { ADD_EVENT, ADD_CAMERA, REMOVE_CAMERA, MODIFY_CAMERA_SETTINGS, ADD_ALERT, REMOVE_ALERT } from './re_actions'
import Camera from './Camera'
import Email from './Email'

const initialState = {
    cameras: [],
    events: [],
    alerts: [],
};

function reducers(state = initialState, action) {
    var newState;
    switch(action.type){
        case ADD_CAMERA:
            return Object.assign(
                {}, state, {
                    cameras: [
                        ...state.cameras,
                        new Camera({name:action.name, source:action.source, port:action.port})
                    ]
                }
            );
        case REMOVE_CAMERA:
            newState = Object.assign({}, state);
            newState.cameras.splice(action.camIndex, 1);
            return newState;
        case MODIFY_CAMERA_SETTINGS:
            console.log(action);
            return Object.assign(
                {}, state, {
                    cameras: state.cameras.map((camera, index) => {
                            if (index===action.camIndex){
                                camera.state.name = action.name;
                                camera.state.source = action.source;
                                camera.state.port = action.port;
                            }
                            return camera;
                        })
                }
            );
        case ADD_EVENT:
            //var email = new Email({email: '', camId: '', event: ''});
            return Object.assign(
                {}, state, {
                    events: [
                        ...state.events,
                        {
                            camIndex: action.camIndex,
                            eventType: action.eventType
                        }
                    ]
                }
            );
        case ADD_ALERT:
            return Object.assign(
                {}, state, {
                    alerts: [
                        ...state.alerts,
                        {
                            camIndex: action.camIndex,
                            eventType: action.eventType,
                            email: action.email
                        }
                    ]
                }
            );
        case REMOVE_ALERT:
            newState = Object.assign({}, state);
            newState.alerts.splice(action.camIndex, 1);
            return newState;
        default:
            return state;
    }
}

export default reducers