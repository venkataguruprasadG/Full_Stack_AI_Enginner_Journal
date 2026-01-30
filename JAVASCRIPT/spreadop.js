/* Problem Statement
Arrays: arr1 = [1, 2], arr2 = [3, 4]

Merge with spread: [1, 2, 3, 4]

Print result

Copy array: numbers = [10, 20]

Create copy with spread, add 30

Print new array: [10, 20, 30]

Expected output:*/

let arr1 = [1, 2]

let arr2 = [3, 4]

let merge = [...arr1, ...arr2]

console.log(merge);

let numbers = [10, 20]

let newArray = [...numbers, 30]

console.log(newArray);