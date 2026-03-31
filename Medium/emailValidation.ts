/* Email Validation  [7 Marks] 

Write a function isValidEmail(email: string): boolean that returns true only if the email contains @ and a dot (.) after @. 

Example:  isValidEmail("test@example.com")  →  true   |   isValidEmail("testexample.com")  →  false 
*/
//syntax: string.indexOf(searchValue, startIndex?)

function isValidEmail(email: string): boolean {
    const atIndex = email.indexOf('@');//start index is 0 by default, we are looking for @ symbol in the email string
    if (atIndex === -1) {
        return false; // No '@' symbol found
    }
    const dotIndex = email.indexOf('.', atIndex);//atindex means we are looking for dot after @
    if (dotIndex === -1) {
        return false; // No dot found after '@'
    }
    return true;
}
//testcases
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("testexample.com")); // false
//edge cases
console.log(isValidEmail("test@.com")); // false
console.log(isValidEmail("test@examplecom")); // false
console.log(isValidEmail("test@example.")); // false
console.log(isValidEmail("@example.com")); // false
console.log(isValidEmail("test@.com."));
