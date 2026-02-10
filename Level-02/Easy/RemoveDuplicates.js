// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same


// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_ ] 

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]


// => Time Complexity o(n)


function removeDuplicates(nums){
    let j = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[j]){
            j++;
            nums[j] = nums[i];
        }
    }
    for(let k = j + 1; k < nums.length; k++){
        nums[k] = "_";
    }

    return j + 1;   
}


let nums = [100,100,200,300,400,400];
let k = removeDuplicates(nums);

console.log("Output:", k);
console.log("nums =", nums);

