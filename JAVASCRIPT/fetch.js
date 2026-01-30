/* Problem Statement
Use fetch to:

GET https://jsonplaceholder.typicode.com/posts/1

Print the title from response

Expected: Some post title like "sunt aut facere..."*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data.title));