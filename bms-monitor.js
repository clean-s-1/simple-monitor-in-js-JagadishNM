import { expect } from 'chai';
import { minTemperatureRange, maxTemperatureRange, minsocRange, maxsocRange, mincharge_rateRange } from './range.constants.js';
import { showMessage } from './showMessage.js';
import { checkTempLimit, checkSocLimit, checkChargeLimit } from './checkMinMaxLimit.js'

function batteryIsOk(funcationName, minValue, maxValue, currentValue, range, type) {
    return {
        temperature: function () {
            
            showMessage(range, currentValue, type);
            return checkTempLimit(minValue, maxValue, currentValue);
        },
        soc: function () {
            showMessage(range, currentValue, type);
            return checkSocLimit(minValue, maxValue, currentValue);
        },
        charge_rate: function () {
            showMessage(range, currentValue, type);
            return checkChargeLimit(maxValue, currentValue);
        }
    }[funcationName]
}

const socRange = {
    'LOW_BREACH': [0, 20],
    'LOW__WARNING': [21, 24],
    'NORMAL': [24, 75],
    'HIGH_WARNING': [76, 80],
    'HIGH_BREACH': [81, 100]
}

const chargeRange = {
    'NORMAL': [0.4, 0.5],
    'HIGH_WARNING': [0.6, 0.68],
    'HIGH_BREACH': [0.7, 0.8]
}

const temperatureRange = {
    'LOW_BREACH': [0, 10],
    'LOW__WARNING': [11, 20],
    'NORMAL': [21, 30],
    'HIGH_WARNING': [31, 35],
    'HIGH_BREACH': [36, 40]
}

const checkSoc = batteryIsOk('soc', minsocRange, maxsocRange, 70, socRange, 'soc' );
//checkSoc();
expect(checkSoc()).to.be.true;

const checkTemparuture = batteryIsOk('temperature', minTemperatureRange, maxTemperatureRange, 35, temperatureRange, 'temperature' );
//checkTemparuture();
expect(checkTemparuture()).to.be.true;

const checkChargeRate = batteryIsOk('charge_rate', null, mincharge_rateRange, 0.7, chargeRange, 'charge_rate' );
//checkChargeRate();
expect(checkChargeRate()).to.be.true;
