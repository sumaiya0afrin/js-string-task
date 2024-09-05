/*
Check whether a string contains all the vowels a, e, i, o, u
*/

const string = 'education'.toLowerCase();
let vowels =['a', 'e', 'i', 'o','u'];
let containsAllVowels = true;
for(let i=0; i<vowels.length; i++){
    if(!string.includes(vowels[i])){
        containsAllVowels = false;
        break;
    }
}
    if (containsAllVowels) {
        console.log("The string contains all the vowels.");
      } 
    else{
        console.log('does not contains all the vowel');
}

