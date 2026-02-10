// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
// Example 1:

// Input: s = "42"

// Output: 42

function stringTonumber(s){
    const intMax = 2147483647;
    const intMin = -2147483648;

    let i = 0;
    let sign = 1;
    let num = 0;

    while(i < s.length && s[i] === ' '){
        i++;
    }
        if(s[i] == "-"){
            sign = -1;
            i++;
        }
        else{
            if(s[i] == '+'){
                i++;
            }
        }

        while(i < s.length && s[i] >= '0' && s[i] <= '9'){
            let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
            num = num * 10 + digit;
            i++;
        }
       
        num = num * sign;
        if(num > intMax) return intMax;
        if(num < intMin) return intMin;
    
return num;

}

const strTonum = stringTonumber("4");

console.log(strTonum);