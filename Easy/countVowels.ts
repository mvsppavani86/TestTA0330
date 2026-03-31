/* Count Vowels  [5 Marks] 

Write a function countVowels(str: string): number that counts vowels (a, e, i, o, u) in a string. 

Example:  countVowels("automation")  →  6 */

function countVowels(str: string): number {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countVowels("automation")); 
console.log(countVowels("hello"));
console.log(countVowels("world")); 
console.log(countVowels("aeiou")); 
console.log(countVowels("bcdfg")); 
