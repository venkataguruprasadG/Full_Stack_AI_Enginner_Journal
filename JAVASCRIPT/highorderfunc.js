/* Problem Statement
Create repeatFn(times, callback) that:

Calls callback() function exactly times times

Test: repeatFn(3, () => console.log("JS"))*/

function repeatFn(times, callback) {
    for (let i = 0; i < times; i++) {
        callback();
    }
}

repeatFn(3, () => console.log("JS"));