// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

function MinStack(operations, values) {
    let stack = [];
    let minStack = [];
    let result = [];

    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        let val = values[i][0];

        if (op === "MinStack") {
            result.push(null);
        }

        else if (op === "push") {
            stack.push(val);

            if (minStack.length === 0) {
                minStack.push(val);
            } else {
                minStack.push(Math.min(val, minStack[minStack.length - 1]));
            }

            result.push(null);
        }

        else if (op === "pop") {
            stack.pop();
            minStack.pop();
            result.push(null);
        }

        else if (op === "top") {
            result.push(stack[stack.length - 1]);
        }

        else if (op === "getMin") {
            result.push(minStack[minStack.length - 1]);
        }
    }

    console.log(result);
    return result;
}


let minstack = MinStack(["MinStack","push","push","push","getMin","pop","top","getMin"],[[],[-2],[0],[-3],[],[],[],[]]);
console.log(minstack);