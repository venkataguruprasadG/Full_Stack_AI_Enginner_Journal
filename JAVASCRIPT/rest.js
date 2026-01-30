/* Problem Statement
Create function average(...scores) that:

Takes any number of scores

Uses reduce() to sum them

Returns sum divided by length

Test: average(85, 92, 78)

Expected output: 85 (rounded, or 85.0)*/

function average(...scores) {
    const sum = scores.reduce((accumulator, cuttent) => accumulator + cuttent, 0);
    return sum / scores.length;
}

console.log(average(85, 92, 78)); // Expected output: 85