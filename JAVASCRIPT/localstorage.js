/* Problem Statement
Save skills = ["JS", "HTML", "CSS"] to LocalStorage as "mySkills" (stringify first!)

Retrieve it back, parse to array

Print first skill skills[0]*/

let skills = ["js", "HTML", "CSS"]

let mySkills = JSON.stringify(skills);

console.log(mySkills);

let parsearray = JSON.parse(mySkills);

console.log(parsearray);

console.log(parsearray[0]);