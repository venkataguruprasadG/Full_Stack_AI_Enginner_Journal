/* Problem Statement
Variables: marks = 92

Create else-if chain:

>= 90 → "Outstanding!"

>= 75 → "Excellent!"

>= 60 → "Pass"

else → "Fail" */

let marks = 92

if (marks >= 90) {
    console.log("Outstanding1");
} else if (marks >= 75) {
    console.log("Excellent");
} else if (marks >= 60) {
    console.log("Pass");
} else if (marks < 60) {
    console.log("fail");
}