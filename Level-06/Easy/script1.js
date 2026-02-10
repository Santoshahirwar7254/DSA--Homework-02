// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 
function addStrings(num1, num2) {

    let carry = [];
    let carryover = 0;

    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carryover > 0) {

        let digit1 = i >= 0 ? Number(num1[i]) : 0;
        let digit2 = j >= 0 ? Number(num2[j]) : 0;

        let sum = digit1 + digit2 + carryover;
        carryover = Math.floor(sum / 10);

        carry.push(sum % 10);

        i--;
        j--;
    }

    return carry.reverse().join("");
}
 const result = addStrings("123", "10");

 console.log("result is :", result);