// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseArray(arr){
    let start = 0;
    let end = arr.length-1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
let reverse = reverseArray(["H","a","n","n","a","h"]);
console.log(reverse);

// Time complexity is  o(n)
// why o(n) beacuse every term has o(1)