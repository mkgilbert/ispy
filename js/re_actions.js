/**
 * Created by Tanner Stevens on 11/8/2016.
 */


export const ADD_CAMERA = 'ADD_CAMERA';
export const REMOVE_CAMERA = 'REMOVE_CAMERA';
export const MODIFY_CAMERA_SETTINGS = 'MODIFY_CAMERA_SETTINGS';

export const ADD_EVENT = 'ADD_EVENT';
export const EventTypes = {
    CAMERA_ON: 'CAMERA_ON',
    CAMERA_OFF: 'CAMERA_OFF'
}

export function addCamera(name, source, port) {
    return { type: ADD_CAMERA, name, source, port }
}

export function removeCamera(index) {
    return { type: REMOVE_CAMERA, index }
}

export function modifyCameraSettings(index, name, source, port) {
    return { type : MODIFY_CAMERA_SETTINGS, index, name, source, port }
}

export function addEvent(cameraIndex, eventType) {
    return { type: ADD_EVENT, cameraIndex,  eventType }
}