/**
 * Created by Tanner Stevens on 11/8/2016.
 */

import { ADD_CAMERA, REMOVE_CAMERA, MODIFY_CAMERA_SETTINGS } from './re_actions'

const initialState = {
    cameras: []
};

function reducers(state = initialState, action) {
    switch(action.type){
        case ADD_CAMERA:
            return Object.assign(
                {}, state, {
                    cameras: [
                        ...state.cameras,
                        {
                            name: action.name,
                            source: action.source,
                            port: action.port
                        }
                    ]
                }
            );
        case REMOVE_CAMERA:
            var newState = Object.Assign({}, state);
            newState.cameras.splice(action.index);
            return newState;
        case MODIFY_CAMERA_SETTINGS:
            return Object.Assign(
                {}, state, {
                    cameras: state.cameras.map((camera, index) => {
                            if (index===action.index){
                                return Object.assign({}, camera, {
                                    name: action.name,
                                    source: action.source,
                                    port: action.port
                                })
                            }
                            return camera;
                        })
                }
            );
        default:
            return state;
    }
}

export default reducers