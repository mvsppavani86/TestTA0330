/*.  Sum Using Rest Parameters  [7 Marks]

Write a function sumAll(...nums: number[]): number that accepts any number of arguments and returns their sum.

Example:  sumAll(1, 2, 3, 4)  →  10   |   sumAll(5, 10)  →  15
*/
function sumAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length === 0)
        throw new Error("At least one number must be provided");
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
//test cases
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(5, 10));
console.log(sumAll(-1, -2, -3, -4, 5, 10));
//negative test case- no arguments
//console.log(sumAll()); 
