/* Problem Statement
Array: marks = [85, 92, 78, 91]

Use reduce() to:

Calculate total sum of all marks

Print the total

Expected output: 346*/

let marks = [85, 92, 78, 91];

let total = marks.reduce((accumulator, current) => accumulator + current, 0);

console.log(total);