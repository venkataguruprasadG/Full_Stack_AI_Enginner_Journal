/* Problem Statement
Create 2 files:

modules.js:

Export function multiply(a, b)

Export constant taxRate = 0.18

app.js:

Import both

Print multiply(10, 5)

Print taxRate * 100 + "%"

Use <script type="module" src="app.js"></script> in HTML

Expected: 50 and 18%*/

export function multiply(a, b) {
    return a * b;
}

export const taxRate = 0.18;