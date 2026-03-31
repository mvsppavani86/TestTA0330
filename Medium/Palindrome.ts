/*Palindrome Check  [7 Marks] 

Write a function isPalindrome(str: string): boolean that returns true if the string reads the same forwards and backwards. 

Example:  isPalindrome("madam")  →  true   |   isPalindrome("hello")  →  false */

function strPalindrome1(str:string):boolean
{
   let reverseStr=""
   str=str.toLowerCase();

   // str=str.replace(/\s/g,'') 
   /*/\s/ → matches any whitespace character (spaces, tabs, newlines, etc.)removing spaces 
   from the string, g is global across any possible matches in the string.*/
   
   for(let i=str.length-1;i>=0;i--)
   {
    reverseStr+=str[i]
   }

if(str==reverseStr)
    return true
else
    return false
}
console.log(strPalindrome1("aba"))
console.log(strPalindrome1("pavani"))
console.log(strPalindrome1("madam"))
console.log(strPalindrome1("aba aba"))

