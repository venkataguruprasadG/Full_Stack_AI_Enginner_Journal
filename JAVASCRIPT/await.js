/* Problem Statement
Create async function fetchUser() that:

Awaits your checkLogin promise

Prints the result message

Call the function

Expected output (after 2 seconds): Login successful*/

async function fetchUser() {
    let checkLogin = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login successful");
        }, 2000);
    });

    let message = await checkLogin;
    console.log(message);
}