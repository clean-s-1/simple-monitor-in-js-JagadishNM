export function checkNumberRange(minNumber, maxNumber, currentValue) {
    Number.prototype.between = function(a, b) {
        var min = Math.min(a, b);
        var  max = Math.max(a, b);
      
        return this >= min && this <= max;
      };

     return currentValue.between(minNumber, maxNumber)
}

