/*
Count how many times a string has the letter a or A
*/
const string = 'this is a paragrAph';
let count = 0;

for(let i=0; i<string.length; i++){
    if(string[i] === 'a' || string[i] === 'A'){
        count ++;
    }
}
console.log(`'a' occurs ${count} times`);