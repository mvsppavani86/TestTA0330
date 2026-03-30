// Function to find the longest word in a sentence
function longestWord(sentence: string): string 
{
    if(sentence.length === 0) {
        throw new Error("Input sentence cannot be empty");
    }
    let words: string[] = sentence.split(" "); // Split sentence into words
    let longest: string = ""; // Variable to store the longest word

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]; // Update longest if current word is longer
        }
    }

    return longest;
}

// Test cases
console.log(longestWord("I love TypeScript"));           // TypeScript
console.log(longestWord("Hello world"));                 // Hello
console.log(longestWord("The quick brown fox jumps"));   // jumps
console.log(longestWord("A tiny cat"));                  // tiny
//negative test case- empty string