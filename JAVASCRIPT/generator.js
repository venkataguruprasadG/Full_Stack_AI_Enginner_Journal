/* Create generator countdownGen() that:

Yields 5, 4, 3, 2, 1

Test: Call next() 5 times*/

function* countdownGen() {
    yield 5;
    yield 4;
    yield 3;
    yield 2;
    yield 1;
}

console.log(countdownGen().next());
console.log(countdownGen().next());
console.log(countdownGen().next());
console.log(countdownGen().next());
console.log(countdownGen().next());

