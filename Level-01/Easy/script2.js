//  Question. write a program  which does the following:
// => initialise a variabel n and accept a user defined input the console
//  => Output "C" to the console n number of times.

// solution:
//  => The Readline module is create an interface to take  input from the terminal
//  => n  variable for  store that value
//  => for loop fro print "C" n times  then the interface is closed.
 


 const readline = require('readline');
const question2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
question2.question("enter the n: ", (N)=>{
    n =  Number(N);
    for(let i = 0; i < n; i++ ){
        console.log("C");
    }
    question2.close();
});

// Time Complexity:
//  O(n)
// Reason:  the loop executes n times  and no extra memory grows with n.
