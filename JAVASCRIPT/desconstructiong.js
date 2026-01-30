/* Problem Statement
Array: coords = [10, 20]

Destructure into x, y

Print both

Object: profile = {city: "Qutubullapur", pin: 500043}

Destructure into city, pin

Print both*/

let coords = [10, 20]

let [x, y] = coords

console.log("x: ", x);
console.log("Y: ", y);

let profile = { city: "Qutubullapur", pin: 500043245 }

let { city, pin } = profile

console.log(city);
console.log(pin);