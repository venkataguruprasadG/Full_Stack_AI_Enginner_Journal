/* Problem Statement
Write try/catch that:

Tries to get LocalStorage item "nonExistentKey"

Catches error and prints "Key not found!"

Bonus: Add finally block that always prints "Checked storage"*/

try {
    let value = localStorage.getItem("nonexistentKey");

    if (value == null) {
        throw new Error("key not found");
    }

    console.log("Value: ${value}");

} catch (error) {
    console.log("Key not found1");
} finally {
    console.log("Checked storage");
}
