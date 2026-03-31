/*
 

9.  Character Frequency  [7 Marks] 

Write a function charFrequency(str: string): object that returns how many times each character appears. 

Example:  charFrequency("aab")  →  { a: 2, b: 1 } 

use for loop, arrays, exception handling, type checking, and comments in your code and dont use objects, literals, or built-in functions that directly solve the problem.
*/

function charFrequency(str: string): object {
    //frequency is an object with key as string and value as number and initially it is empty and it accepts a string as input 
    // and returns an object with key as character and value as frequency of that character in the string
    let frequency: { [key: string]: number } = {};
    for(let i of str)
    {
        if(frequency[i])//if the character is already present in the frequency object then increment its value by 1
        {
            frequency[i]++;//
        }
        else        {
            frequency[i] = 1;
        }
    }
    return frequency;
}
//test cases
console.log(charFrequency("aab"));
console.log(charFrequency("hello world"));
console.log(charFrequency("123 123 123"));
console.log(charFrequency(""));
console.log(charFrequency("a"));
//exception handling
try {
    console.log(charFrequency(123 as unknown as string));
}catch (error) {
    console.error("Invalid input: Input must be a string.");
}
