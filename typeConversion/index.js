// type conversion = change the datatype of a value to another
//                     (strings, numbers, booleans)


// String to Number
let age = window.prompt("How old are your");
age=Number(age); // -> we use the Number function to convert string or boolean into number 
age+=2;

console.log(age, typeof age);
document.getElementById("p1").textContent = `You are ${age} years old`

let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // -> This will display NaN meaning the value is not a number
console.log(y, typeof y);
console.log(z, typeof z);