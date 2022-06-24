export function checkTempLimit(minValue, maxValue, currentValue){
    if (currentValue < minValue || currentValue > maxValue) {
        console.log('Temperature is out of range!');
        return false;
    }return true;
    
}

export function checkSocLimit(minValue, maxValue, currentValue){
    if (currentValue < minValue || currentValue > maxValue) {
        console.log('State of Charge is out of range!')
        return false;
    }return true;
    
}

export function checkChargeLimit( maxValue, currentValue){
    if (currentValue > maxValue) {
        console.log('Charge rate is out of range!')
        return false;
    }return true;
    
}