/* Problem Statement
Create Map inventory:

set("laptop", 2)

set("mouse", 5)

Print inventory.size

Print inventory.get("laptop")

Check inventory.has("keyboard") */

let inventory = new Map()
inventory.set("laptop", 2)
inventory.set("mouse", 5)

console.log(inventory.size);

console.log(inventory.has("keyboard"));

console.log(inventory.get("laptop"));