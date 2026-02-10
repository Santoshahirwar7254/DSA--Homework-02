// Given a number, we need to find sum of its digits using recursion.

// Examples: 

// Input: 12345
// Output: 15
// Explanation: Sum of digits → 1 + 2 + 3 + 4 + 5 = 15

// Input: 45632
// Output: 20 

// Time complexity:  o(log n);

function digit(n) {
    if (n === 0) return 0;        
    return (n % 10) + digit(Math.floor(n / 10));
}
let sumOfDigits = digit(45);
console.log(sumOfDigits);