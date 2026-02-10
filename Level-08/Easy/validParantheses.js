// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false


// Time complexity: o(n)
function Valid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {
        
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } 
    
        else {
            if (stack.length === 0) return false;

            let top = stack.pop();
            if (top !== map[ch]) return false;
        }
    }

    return stack.length === 0;
}

const Para = Valid("(]");
console.log(Para);
