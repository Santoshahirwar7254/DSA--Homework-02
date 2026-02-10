// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

// Note that operands in the returned expressions should not contain leading zeros.

// Note that a number can contain multiple digits.


// Example 1:

// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.

function Operators(num, target) {
    let result = [];

    function solve(index, expr, currVal, lastVal) {
        if (index === num.length) {
            if (currVal === target) result.push(expr);
            return;
        }

        for (let i = index; i < num.length; i++) {
            // avoid leading zero
            if (i !== index && num[index] === '0') break;

            let part = num.substring(index, i + 1);
            let val = Number(part);

            if (index === 0) {
                solve(i + 1, part, val, val);
            } else {
                solve(i + 1, expr + "+" + part, currVal + val, val);
                solve(i + 1, expr + "-" + part, currVal - val, -val);
                solve(
                    i + 1,
                    expr + "*" + part,
                    currVal - lastVal + lastVal * val,
                    lastVal * val
                );
            }
        }
    }

    solve(0, "", 0, 0);
    return result;
}

let  expression = Operators("123",6);
console.log(expression);
