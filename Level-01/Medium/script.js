//  1. Array

// Question: you are given an array A of size N and an element X. your taske is to find whether the array A contains the element X  or not
// sample 1:
//  input:   7,3,5,2,1
//  find:     5,3
//  output:  "YES"

// sample 2:  
// input: 7,3,5,2,1
// find: 5,1,0
// output: "NO"

// solution:
// input array 
//  convert array into set
//  input elements to find
//  found = true;
//   for each element in find
// if element not in set
//   found = false
//   break;
//  if found == true
//  print "yes"
// else 
    // print "no"

function Elements(array, findArray) {
    const set = new Set(array);

    for (let i = 0; i < findArray.length; i++) {
        if (!set.has(findArray[i])) {
            console.log("NO");
            return;
        }
    }

    console.log("YES");
}
let checkElements = Elements([7,3,5,2,1],[5,1]);
