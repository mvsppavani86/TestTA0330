// Function to find the longest word in a sentence
function longestWord(sentence) {
    if (sentence.length === 0) {
        throw new Error("Input sentence cannot be empty");
    }
    var words = sentence.split(" "); // Split sentence into words
    var longest = ""; // Variable to store the longest word
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]; // Update longest if current word is longer
        }
    }
    return longest;
}
// Test cases
console.log(longestWord("I love TypeScript")); // TypeScript
console.log(longestWord("Hello world")); // Hello
console.log(longestWord("The quick brown fox jumps")); // jumps
console.log(longestWord("A tiny cat")); // tiny
//negative test case- empty string
