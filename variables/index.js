//variable - a container that store a value
            //Behave as if it were the value it contains.

// 1. DECLARATION       let x;
// 2. ASSIGNMENT        x = 100;

let x; //this is an example of declaration
x = 123;//this is an example of assigning a value at declare variables
console.log(x);

let y = 100; //this is an example of combination of declaration and assignment of value
console.log(y);


//Examples for data type number

let age = 23;
let price = 9.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(`Your GPA is ${gpa} congrats`)
console.log(typeof age);
console.log(typeof gpa);

//Examples for data type for string

let fName = "John Lloyd";
let lName = "Dacanay";
let fFood = "Tokwa at Baboy"
console.log(typeof fName);
console.log(fName);
console.log(`Your name is ${fName}`);
console.log(`Your name is ${fName} ${lName} and your favorite food is ${fFood}`)

//Example for BOOLEAN it use for 1 or 0
let online = true;
let forSale = false;

console.log(typeof online);
console.log(`You will be hire at ITBS: ${online}`);
console.log(`Is this property for sale? ${forSale}`);

//to display and change the content at HTML

let FullName = "John Lloyd Dacanay";
let Age = 23;
let student = false;

document.getElementById("p1").textContent = `Your name is ${FullName}`;
document.getElementById("p2").textContent = `Your Age is ${Age} years old`;
document.getElementById("p3").textContent = `You're a student? ${student}`;
