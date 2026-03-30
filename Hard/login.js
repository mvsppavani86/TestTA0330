// Enum to restrict allowed usernames
var Usernames;
(function (Usernames) {
    Usernames["Admin"] = "admin";
    Usernames["Trainer"] = "trainer";
    Usernames["User"] = "user";
})(Usernames || (Usernames = {}));
// Array of users
var users = [
    { username: Usernames.Admin, password: "1234" },
    { username: Usernames.Trainer, password: "abcd" },
    { username: Usernames.User, password: "pass" }
];
// Login function wher username is restricted to enum values and password is a string and users is an array of user objects
function login(users, username, password) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var i = users_1[_i];
        if (i.username === username && i.password === password) {
            return "Login Successful";
        }
    }
    return "Invalid Credentials";
}
// Test cases
console.log(login(users, Usernames.Admin, "1234")); // Login Successful
console.log(login(users, Usernames.Admin, "wrong")); // Invalid Credentials
console.log(login(users, Usernames.Trainer, "abcd")); // Login Successful
console.log(login(users, Usernames.User, "pass")); // Login Successful
// Negative test case - can't even pass unknown username because enum restricts it
