/*Palindrome Check  [7 Marks] 

Write a function isPalindrome(str: string): boolean that returns true if the string reads the same forwards and backwards. 

Example:  isPalindrome("madam")  →  true   |   isPalindrome("hello")  →  false */

function strPalindrome(str:string):string
{
   let reverseStr=""
   str=str.replace(/\s/g,'') 
   /*/\s/ → matches any whitespace character (spaces, tabs, newlines, etc.)removing spaces 
   from the string, g is global across any possible matches in the string.*/
   
   for(let i=str.length-1;i>=0;i--)
   {
    reverseStr+=str[i]
   }

if(str.toLowerCase()==reverseStr.toLowerCase())
    return "palindrome"
else
    return "Non-Palindrome"
}
console.log(strPalindrome("aba"))
console.log(strPalindrome("pavani"))
console.log(strPalindrome("madam"))
console.log(strPalindrome("aba aba"))

