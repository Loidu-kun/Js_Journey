/*
.filter() = creates a new array by filtering out elements

*/

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

//Practical example

const ages = [13,14,15,16,17,18,19,20];
const Adults = ages.filter(isAdult);
const child = ages.filter(isChild);

console.log(Adults);
console.log(child);

function isAdult(element){
    return element >= 18;
}

function  isChild(element){
    return element < 18;
}

const words = ["Meow", "HI", "Kewk", "Ohcakes", "ARgghhhhhhhh"];
const shortWord = words.filter(getShort);
const longWord = words.filter(getLong);


console.log(shortWord);
console.log(longWord);

function getShort(element){
    return element.length <= 4;
}

function getLong(element){
    return element.length > 4;
}