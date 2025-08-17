/*
.map() = accept a callback and applies that function to each element
         of an array, then return a new array
*/

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2)
}


const students = ["Cat", "Dog", "Duck", "Bird"];
const uppper = students.map(upperCase);
console.log(uppper);

function upperCase(element){
    return element.toUpperCase();
}

const dates = ["2025-1-13", "2025-2-15", "2025-3-17", "2025-4-20",];
const formats = dates.map(format);

console.log(formats);

function format(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}