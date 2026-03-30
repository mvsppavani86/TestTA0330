// Enum to restrict allowed usernames
enum Usernames {
    Admin = "admin",
    Trainer = "trainer",
    User = "user"
}

// Define a type for user objects
type User = {
    username: Usernames; // Use enum for username
    password: string;
};

// Array of users
const users: User[] = [
    { username: Usernames.Admin, password: "1234" },
    { username: Usernames.Trainer, password: "abcd" },
    { username: Usernames.User, password: "pass" }
];

// Login function wher username is restricted to enum values and password is a string and users is an array of user objects
function login(users: User[], username: Usernames, password: string): string {
    for (let i of users) {
        if (i.username === username && i.password === password) {
            return "Login Successful";
        }
    }
    return "Invalid Credentials";
}

// Test cases
console.log(login(users, Usernames.Admin, "1234"));      // Login Successful
console.log(login(users, Usernames.Admin, "wrong"));     // Invalid Credentials
console.log(login(users, Usernames.Trainer, "abcd"));    // Login Successful
console.log(login(users, Usernames.User, "pass"));       // Login Successful
// Negative test case - can't even pass unknown username because enum restricts it