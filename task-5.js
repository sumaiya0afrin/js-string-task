/*
Capitalize Every first Letter of each word in a String
*/

let str = "capitalize every first letter of each word";

// Split the string into words
let words = str.split(" ");
let result = "";

// Loop through each word and capitalize the first letter
for (let i = 0; i < words.length; i++) {
  let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  
  // Add the capitalized word to the result string with a space
  result += capitalizedWord + (i < words.length - 1 ? " " : "");
}

console.log(result);  // Output: "Capitalize Every First Letter Of Each Word"

