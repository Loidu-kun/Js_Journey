/*
spread operator = allows an iterable such as an array or string
                  to be expanded into separate elements
                  (unpacks the elements)
*/

let numbers = [1,3,5,7];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(max);
console.log(min);

for(let i = 0; i < numbers.length;i++){
    console.log(numbers[i]);
}

let username = "Bro Code"
let letters = [...username].join("-");

console.log(letters);

for(let j = 0; j < letters.length;j++){
    console.log(letters[j]);
}


//Shallow copy, a difffernt data constructure but identical values
let fruits = ["Apple", "Banana", "Cocomelon", "Dragon Fruit"];
let newfruits = [...fruits];

console.log(fruits);
console.log(newfruits);

//Example of combining arrays

let pets = ["Dogs", "Cats", "Snake"];
let colors = ["Red", "Blue", "Yellow"];

let combine = [...pets, ...colors, "eggs", "peanut"];

console.log(combine);