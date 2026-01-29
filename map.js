/* roblem Statement
Array: prices = [100, 200, 300]

Use map() to:

Add 50 tax to each price

Store result in finalPrices

Print finalPrices array

Expected output: [150, 250, 350]*/

let prices = [100, 200, 300]

let finalPrices = prices.map((price) => price + 50)

console.log(finalPrices);