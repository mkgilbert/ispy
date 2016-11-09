/**
 * Created by Tanner Stevens on 11/8/2016.
 */


export const ADD_CAMERA = 'ADD_CAMERA';
export const REMOVE_CAMERA = 'REMOVE_CAMERA';
export const MODIFY_CAMERA_SETTINGS = 'MODIFY_CAMERA_SETTINGS';

export function addCamera(name, source, port) {
    return { type: ADD_CAMERA, name, source, port }
}

export function removeCamera(index) {
    return { type: REMOVE_CAMERA, index }
}

export function modifyCameraSettings(index, name, source, port) {
    return { type : MODIFY_CAMERA_SETTINGS, index, name, source, port }
}