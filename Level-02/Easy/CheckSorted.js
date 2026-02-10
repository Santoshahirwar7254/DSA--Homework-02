// Given an array arr[] of size n, the task is to return true if it was originally sorted in non-decreasing order and then rotated (including zero rotations). Otherwise, return false. The array may contain duplicates.
// Examples:

// Input: arr[] = { 3, 4, 5, 1, 2 }
// Output: YES
// Explanation: The above array is sorted and rotated
// Sorted array: {1, 2, 3, 4, 5}
// Rotating this sorted array clockwise 
// by 3 positions, we get: { 3, 4, 5, 1, 2}

// Input: arr[] = {3, 4, 6, 1, 2, 5}
// Output: NO

// Time  Complexity = o(n)


function sorted(arr){
    let  count = 0; 
    let n = arr.length;

    for(let i = 1; i < n; i++){
        if(arr[i] > arr[(i + 1) % n]){
            count++;
        }
    }
    if(count <= 1){
        return "YES";
    }
    return "NO";
}

const check = sorted([3,4,5,1,2]);
console.log(check);