/* Problem Statement
Array: scores = [45, 82, 67, 91, 34, 88]

Use filter() to:

Keep only scores >= 70

Store in passedScores

Print passedScores

Expected output: [82, 91, 88]*/

let scores = [45, 82, 67, 91, 34, 88];

let passedScores = scores.filter((score) => score >= 70);

console.log(passedScores);