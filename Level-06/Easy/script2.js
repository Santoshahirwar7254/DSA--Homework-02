// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 
function reverseString(S){
    let str = S.split(" ");
    let ans = [];
    
    for(let word of str){
        let rev = "";
        for(let i = word.length-1; i >= 0; i--){
            rev = rev + word[i];
        }
        ans.push(rev);

    }
    return ans.join(" ");
}
let reverse = reverseString("Mr Ding");
console.log(reverse);