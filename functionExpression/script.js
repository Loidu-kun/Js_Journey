/* Function declartion - define reusable block of code that
                        performs a specific task.

    Function expression = a way to define functions as values or variables

    1.Callback in asynchronus operation
    2. higher-order function
    3. Closures
    4, Event Listeners
*/

//EXAMPLE OF function declaration

function greet(){
    console.log("Wazup");
}

greet();

//Example of function expression

const hello = function(){
    console.log("Bro")
}

hello();

setTimeout(function(){
    console.log("Try it works");
}, 5000);


//EXAMPLE 2 WITH ARRAY - DECLARATION
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares)

function square(element){
    return Math.pow(element, 2);
}

//EXAMPLE 2.1 WITH ARRAY - EXPRESSION

const cubes = numbers.map(function (element){
    return Math.pow(element, 3);
});

console.log(cubes)


const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);

const sum = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(sum);

