/* Problem Statement
Create Set from: ["JS", "HTML", "JS", "CSS", "HTML"]

Print set.size

Check set.has("React")

Print all unique items using for...of */

let programming_languages = ["JS", "HTML", "JS", "CSS", "HTML"];

let unique_languages = new Set(programming_languages);

console.log(unique_languages.size);

console.log(unique_languages.has("React"));

for (let lang of unique_languages) {
    console.log(lang);
}