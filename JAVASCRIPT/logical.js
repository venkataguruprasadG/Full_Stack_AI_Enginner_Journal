/*Problem Statement
Variables: age = 30, score = 85, hasId = false

Test and print:

age >= 21 && score > 80 (club entry?)

age < 18 || !hasId (restricted?)

!(score >= 70) (failed?)

Expected: true, false, false*/

let age = 30;
let score = 85;
let hasId = false;

console.log(age >= 21 && score > 80);
console.log(age < 18 || !hasId);
