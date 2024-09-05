/*
Count how many times a string has the letter a
*/

const string = 'this is a paragraph';
let count = 0;

for(let i=0; i<string.length; i++){
    if(string[i] === 'a'){
        count ++;
    }
}
console.log(`'a' occurs ${count} times`);