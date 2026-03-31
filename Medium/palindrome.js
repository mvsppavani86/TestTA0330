/*Palindrome Check  [7 Marks]

Write a function isPalindrome(str: string): boolean that returns true if the string reads the same forwards and backwards.

Example:  isPalindrome("madam")  →  true   |   isPalindrome("hello")  →  false */
function strPalindrome(str) {
    var reverseStr = "";
    str = str.replace(/\s/g, ''); //removing all spaces from the string
    for (var i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    if (str.toLowerCase() == reverseStr.toLowerCase())
        return "palindrome";
    else
        return "Non-Palindrome";
}
console.log(strPalindrome("aba"));
console.log(strPalindrome("pavani"));
console.log(strPalindrome("madam"));
console.log(strPalindrome("aba aba"));
