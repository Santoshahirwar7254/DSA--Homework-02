// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

function Parenthesis(n) {
    let result = [];

    function backtrack(current, open, close) {
    
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}

let generate = Parenthesis(3);
console.log(generate);