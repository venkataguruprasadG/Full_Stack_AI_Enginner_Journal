/* Problem Statement
Create createMultiplier(base) function that:

Takes base number parameter

Returns inner function that multiplies any input by base

Test: let double = createMultiplier(2); double(5)

Expected output: 10*/

function createMultiplier(base) {
    return function (num) {
        return base * num;
    };
}

let double = createMultiplier(2);

console.log(double);