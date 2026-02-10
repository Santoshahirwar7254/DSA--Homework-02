// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Time complexity: o(n)

function Palindrome(s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!/[a-z0-9]/.test(s[left])) {
            left++;
        } else if (!/[a-z0-9]/.test(s[right])) {
            right--;
        } else {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
    }
    return true;
}

let validPalindrome = Palindrome("race a car");
console.log(validPalindrome);