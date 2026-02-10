// You have been given an array/list 'ARR' of integers. Your task is to find the second largest element present in the 'ARR'.
// Note:
// a) Duplicate elements may be present.
// b) If no such element is present return -1.
// Example:
// Input: Given a sequence of five numbers 2, 4, 5, 6, 8.
// Output:  6


// Time complexity = o(n)
//  n elements -> n iterations -> o(n)

function secondlargest(arr,){
    if(arr.length < 2){
        return -1;
    }
    let largest = 0, secondLarg  = 0;

    if(arr[0] > arr[1]){
        largest = arr[0];
        secondLarg = arr[1];
    }else{
        largest = arr[1];
        secondLarg = arr[0];
    }
    for(let i = 2; i < arr.length; i++){
        if(arr[i] > largest){
            secondLarg = largest;
            largest = arr[i];
        }
        else
            if(arr[i] < largest && arr[i] > secondLarg){
                secondLarg  = arr[i];
            }
    }
    return secondLarg ;
}
const secondlargElement = secondlargest([2,4,5,6,8]);
console.log("second largest Element is:", secondlargElement);

