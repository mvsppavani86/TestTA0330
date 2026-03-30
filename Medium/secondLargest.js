function secondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least 2 elements");
    }
    var large = -Infinity;
    var secondLarge = -Infinity;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num > large) {
            secondLarge = large;
            large = num;
        }
        else if (num > secondLarge && num !== large) {
            secondLarge = num;
        }
    }
    if (secondLarge === -Infinity) {
        throw new Error("Array must have at least 2 distinct numbers");
    }
    return secondLarge;
}
// Test cases
console.log(secondLargest([1, 3, 8, 7, 123]));
console.log(secondLargest([5, 5, 5, 10]));
console.log(secondLargest([10, 9]));
//console.log(secondLargest([1]));//error case
console.log(secondLargest([2, 2, 2]));
