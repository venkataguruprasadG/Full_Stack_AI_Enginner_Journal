/* Problem Statement
Create recursive countdown(n) that:

Base case: n <= 0 → prints "Done!"

Recursive case: prints n, calls countdown(n-1)

Test: countdown(4)*/

function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
    }
    else {
        console.log(n);
        countdown(n - 1);
    }
}

countdown(4);