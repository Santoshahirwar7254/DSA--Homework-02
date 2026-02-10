// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Time complexity: o(n);

function calculate(s) {
    let stack = [];
    let result = 0;
    let sign = 1;
    let num = 0;

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
        }
        else if (ch === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        }
        else if (ch === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        }
        else if (ch === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        }
        else if (ch === ')') {
            result += sign * num;
            num = 0;
            let prevSign = stack.pop();
            let prevResult = stack.pop();
            result = prevResult + prevSign * result;
        }
    }
    return result + sign * num;
}

let calces = calculate("(1+(4+5+2)-3)+(6+8)");
console.log(calces);