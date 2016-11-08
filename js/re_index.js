/**
 * Created by Tanner Stevens on 11/8/2016.
 */

import { ADD_CAMERA, REMOVE_CAMERA, MODIFY_CAMERA_SETTINGS } from './re_actions'
import { createStore } from 'redux'
import reducers from './re_reducers'

let store = createStore(reducers);