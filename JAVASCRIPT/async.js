/* Problem Statement
Create promise checkLogin that:

Uses setTimeout (2 seconds delay)

Resolves with "Login successful"

Use .then() to print the success message

Expected output (after 2 seconds): Login successful*/

let checkLogin = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Login successful");
    }, 2000);
});

checkLogin.then((message) => {
    console.log(message);
})