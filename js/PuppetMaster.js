/**
 * Created by Tanner Stevens on 11/16/2016.
 */

import { addEvent, EventTypes } from './re_actions'

class PuppetMaster {
    constructor(store){
        this.store = store;
    }

    startRolling(){
        if (this.timer==null){
            this.timer = setInterval(this.rollForEvent.bind(this), 1000);
        }
    }

    stopRolling(){
        if(this.timer!=null){
            clearInterval(this.timer);
        }
    }

    rollForEvent(){
        var roll = Math.round( (Math.random()*100) );
        if (roll > 33 && roll < 40) {
            var eTypeKeys = Object.keys(EventTypes);
            var cRoll = Math.floor((Math.random() * this.store.getState().cameras.length));
            var eRoll = Math.floor((Math.random() * eTypeKeys.length));
            this.store.dispatch(addEvent(cRoll, EventTypes[eTypeKeys[eRoll]]));
        }
    }
}

export default PuppetMaster;