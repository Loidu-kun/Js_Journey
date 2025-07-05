// CONST = a variable that can't be change
//
// why use const? to avoid the mischanging of a variable or data value in a program

const PI = 3.14159;
let radius;
let circum;

document.getElementById("sum").onclick = function(){
    radius = document.getElementById("myRad").value;
    radius = Number(radius);
    circum = 2 * PI * radius;
    console.log(circum, typeof circum)
    document.getElementById("p1").textContent = `The answer is ${circum}`;
}