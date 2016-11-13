/**
 * Created by Tanner Stevens on 11/8/2016.
 */

import { ADD_EVENT, ADD_CAMERA, REMOVE_CAMERA, MODIFY_CAMERA_SETTINGS } from './re_actions'
import Camera from './Camera'

const initialState = {
    cameras: [],
    events: []
};

function reducers(state = initialState, action) {
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
            var newState = Object.assign({}, state);
            newState.cameras.splice(action.index, 1);
            return newState;
        case MODIFY_CAMERA_SETTINGS:
            return Object.assign(
                {}, state, {
                    cameras: state.cameras.map((camera, index) => {
                            if (index===action.index){
                                camera.state.name = action.name;
                                camera.state.source = action.source;
                                camera.state.port = action.port;
                            }
                            return camera;
                        })
                }
            );
        case ADD_EVENT:
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
        default:
            return state;
    }
}

export default reducers