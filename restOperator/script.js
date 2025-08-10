/*
rest parameters = (...rest) allow a function work with a variable number of arguments by
                  bundling them into an array

                  spread = expands an array into separate elements
                  rest = bundles separate elements into an array
*/


function fridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "fries";
const food4 = "hotdogs";

fridge(food1, food2, food3, food4);

//const foods = getFood(food1, food2, food3, food4);

//console.log(foods);

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
            result += number;
    }
    return result;
}
const total = sum(1,2,3);
console.log(`Your Total is $${total}`);

function avg(...numbers){

    let result = 0;
    for(let number of numbers){
            result += number;
    }
    return result / numbers.length;
}

const average = avg(75, 100, 85, 90, 50);

console.log(average);


// using rest parameters to combine strings


function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepant");

console.log(fullName);