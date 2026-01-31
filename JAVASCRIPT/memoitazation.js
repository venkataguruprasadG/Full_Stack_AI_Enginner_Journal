/* Problem Statement
Create fibonacci(n) recursive function (normal slow version)

Memoize it

Test: fib(10) then fib(10) again

Notice 2nd call is instant!*/

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function memoize(func) {
    const cache = {};
    return function (n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        cache[n] = func(n);
        return cache[n];
    };
}

let fib = memoize(fibonacci);

console.log(fib(10));

console.log(fib(10));

