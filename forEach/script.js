/*

forEach() = method used to iterate over the elements
            of an array and apply a specified function (callback)
            to each element.

            array.forEach(callback)
            element, index, array

*/



// This example is use to display each element of an array
let numbers = [1, 2, 3, 4, 5];


numbers.forEach(cube);
// numbers.forEach(square);
// numbers.forEach(triple);
// numbers.forEach(double);
numbers.forEach(display);

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function triple(element, index, array){
    array[index] = element * 3;
}

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
        console.log(element);
}


//PRACTICAL EXAMPLES

//Ex1 this example is use to convert each element into an UpperCase

let colors = ["Red", "Blue", "Green", "Yellow", "White"];

colors.forEach(upperCase);
colors.forEach(shows);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function shows(element){
    console.log(element);
}

//Ex1 this example is use to convert each element into an LowerCase

let color = ["RED", "BLUE", "GREEN", "YELLOW", "WHITE"];

color.forEach(lowerCase);
color.forEach(show);

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function show(element){
    console.log(element);
}

//Ex1 this example is use to convert each element first char into an Capital Letter

let pet = ["dog", "cat", "bird"];

pet.forEach(sentence);
pet.forEach(reveal);
pet.forEach(paste);

function sentence(element, index, array){
        array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function reveal(element){
    console.log(element);
}

function paste(element){
     document.getElementById("output").innerHTML += element + "<br>";
}