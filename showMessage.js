import { checkNumberRange } from './check.range.js';

export function showMessage(range, currentValue, type) {
    for (const obj in range) {
        const isRange = checkNumberRange(range[obj][0], range[obj][1], currentValue);
        if(isRange){
            let messageType = findMessage(obj, type);
            messageType();
        }
    }
}

function findMessage(messageName, type){
    return {
        LOW_BREACH: function () {
            console.log(`${type} is LOW_BREACH`);
        },
        LOW__WARNING: function () {
            console.log(`${type} is LOW__WARNING`);
        },
        NORMAL: function () {
            console.log(`${type} is NORMAL`);
        },
        HIGH_WARNING: function () {
            console.log(`${type} is HIGH_WARNING`);
        },
        HIGH_BREACH: function () {
            console.log(`${type} is HIGH_BREACH`);
        }
    }[messageName]
    
}