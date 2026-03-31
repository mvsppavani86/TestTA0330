"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function factor(num) {
    var factors = [];
    if (num === 0)
        throw new Error("Input should be non-zero");
    for (var i = 1; i <= num; i++) {
        if (num % i === 0)
            factors.push(i);
    }
    return factors;
}
//test case
console.log(factor(5));
console.log(factor(10));
//console.log(factor(0));
