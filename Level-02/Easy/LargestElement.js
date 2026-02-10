// Problem statement
// Given an array ‘arr’ of size ‘n’ find the largest element in the array.

// Example:

// Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]

// Output: 5

function LargestElement(arr){
    let n = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n ){
            n = arr[i];
        }
    }
    return n;

}
let largest = LargestElement([1,2,3,4,5]);
console.log("Largest Number is: ", largest);

// Total Time Complexity
// O(1) + O(n) + O(1)
// Dominant term = O(n)