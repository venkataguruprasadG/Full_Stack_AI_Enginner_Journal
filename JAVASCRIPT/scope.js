/* Problem Statement
Create this structure:

Global variable city = "Qutubullapur"

Function showLocation() with local variable state = "Telangana"

Inside function: print both global city and local state

Outside function: print only global city*/

let city = "Quttubullapur";

function showLocation() {
    let state = "telangana";
    console.log(city);
    console.log(state);
}

console.log(city);
showLocation();