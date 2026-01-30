/* Problem Statement
Create object book = {title: "JS Mastery", pages: 500}

Convert to JSON string, print it

Parse back to object, print title*/

let book = { title: "JS Mastery", pages: 500 };

let jsonString = JSON.stringify(book);

console.log(jsonString);

let parsedbook = JSON.parse(jsonString);

console.log(parsedbook.title);