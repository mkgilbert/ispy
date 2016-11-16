/**
 * Created by Tanner Stevens on 11/8/2016.
 */


export const ADD_CAMERA = 'ADD_CAMERA';
export const REMOVE_CAMERA = 'REMOVE_CAMERA';
export const MODIFY_CAMERA_SETTINGS = 'MODIFY_CAMERA_SETTINGS';
export const ADD_EVENT = 'ADD_EVENT';
export const EventTypes = {
    CAMERA_ON: 'CAMERA_ON',
    CAMERA_OFF: 'CAMERA_OFF',
    MOTION_DET: 'MOTION_DET',
};

export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export function addCamera(name, source, port) {
    return { type: ADD_CAMERA, name, source, port }
}

export function removeCamera(camIndex) {
    return { type: REMOVE_CAMERA, camIndex }
}

export function modifyCameraSettings(camIndex, name, source, port) {
    return { type : MODIFY_CAMERA_SETTINGS, camIndex, name, source, port }
}

export function addEvent(camIndex, eventType) {
    return { type: ADD_EVENT, camIndex,  eventType }
}

export function addAlert(camIndex, email, eventType) {
    return { type: ADD_ALERT, camIndex, email, eventType }
}
