/* roblem Statement
Create fibonacci(n) recursive function (normal slow version)

Memoize it

Test: fib(10) then fib(10) again

Notice 2nd call is instant!*/

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(m - 1) + fibonacci(n - 2);
    }
}

function memomize(fn) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

let fib = memomize(fibonacci);

console.log(fib(10));

console.log(fib(10));

