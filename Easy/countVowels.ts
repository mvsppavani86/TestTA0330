/* Count Vowels  [5 Marks] 

Write a function countVowels(str: string): number that counts vowels (a, e, i, o, u) in a string. 

Example:  countVowels("automation")  →  6 */

function countVowels(str: string): number {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str= str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Test cases
<<<<<<< HEAD
console.log(countVowels("automation")); // Output: 6
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("aeiou")); // Output: 5
console.log(countVowels("bcdfg")); // Output: 0
=======
console.log(countVowels("automation")); 
console.log(countVowels("hello"));
console.log(countVowels("world")); 
console.log(countVowels("aeiou")); 
console.log(countVowels("bcdfg")); 
>>>>>>> 20b129eff7ac21575fbf30852a55bf01beeecdea
