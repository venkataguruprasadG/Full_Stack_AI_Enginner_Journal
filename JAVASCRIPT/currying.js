/* Problem Statement
Create curried multiply(a) that:

Returns function taking b

Returns function taking c

Final result: a * b * c

Test: let times2 = multiply(2); times2(3)(4)*/

function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

let times = multiply(2);

let times2 = times(3);

console.log(times2(4));