/*

array - a variable like structure that can hold more than 1 value

*/


//Example of Declaring and showing simple array variable
let fruits =  ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Reassining  array variable

fruits[2] = "Maple";
console.log(fruits[2]);

//Built in method of adding an element into the array

//fruits.push("Strawberry");
//fruits.pop();
//fruits.unshift("Mango");
// fruits.shift("Manga");

//TO GET LENGHT OF ARRAY

let nums = fruits.length;
console.log(nums);

// TO CHECK THE INDEX OF AN ARRAY

let index = fruits.indexOf("Banana");
console.log(`The Banana was located at index number ${index}`);


//Example of array and for loop

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// for reverse 
for(let i = fruits.length - 1; i >= 0;  i--){
    console.log(fruits[i]);
}

// Shortcut on displaying array in for loop


fruits.sort().reverse();  // To sort an array
for(let fruit of fruits){
    console.log(fruit);
}

