/*
Ternary Operator = a shortcut to if() and else () statements
                    helps to assign a variable based on a condition
                    condition ? condeIfTrue : codeIfFalse;

*/

let age = 10;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 11;
let greeting = time < 12  ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let isStudent = false;
let stats = isStudent ? "You're a Student" : "You're not Student";
console.log(stats);

let amount = 100;
let discount    = amount >= 100 ? 10 : 0;
console.log(`Your total is $${amount - amount * (discount/100)}`)