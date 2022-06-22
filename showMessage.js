import { checkNumberRange } from './check.range.js'
export function showMessage(range, soc, type) {
    for (const obj in range) {
        const isRange = checkNumberRange(range[obj][0], range[obj][1], soc);
        if (obj == 'LOW_BREACH' && isRange) {
            console.log(`${type} is LOW_BREACH`);
            return false;
        } else if (obj == 'LOW__WARNING' && isRange) {
            console.log(`${type} is LOW__WARNING`);
            return false;
        } else if (obj == 'NORMAL' && isRange) {
            console.log(`${type} is NORMAL`);
            return false;
        } else if (obj == 'HIGH_WARNING' && isRange) {
            console.log(`${type} is HIGH_WARNING`);
            return false;
        } else if (obj == 'HIGH_BREACH' && isRange) {
            console.log(`${type} is HIGH_BREACH`);
            return false;
        }
    }
}