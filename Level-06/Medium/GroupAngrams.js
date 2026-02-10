// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs){
    const map = {};

    for(let word of strs){
        let freq = new Array(26).fill(0);

        for(let ch of word){
            freq[ch.charCodeAt(0) - 97]++;   
        }
        let key = freq.join("#");
        
        if(!map[key]){
            map[key] = [];
            
        }
        map[key].push(word);
    }
    return Object.values(map);
}

const group =  groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(group);