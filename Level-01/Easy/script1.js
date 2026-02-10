// 1. Basic input & output
// Question. Write a program that takes a number N as the input ans prints it to the output

//   Sample 1:
// input 123
// output 123

// solve:
// => let  assign a variable and  store the value and return it

const readline = require('readline');

const  question1 =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

question1.question("Enter the number ", (N) =>{
    n = Number(N);
    
    console.log("number is:", n);
    question1.close()
})

// 2. Conditional statements
//  Question. write a program  which does the following:
// => initialise a variabel n and accept a user defined input the console
//  => Output "C" to the console n number of times.


const question2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
question2.question("enter the n", (N)=>{
    n =  Number(N);
    for(let i = 0; i < n; i++ ){
        console.log("C");
    }
    question2.close();
});

