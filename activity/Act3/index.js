// RANDOM NUMBER GENERATOR

 /*const min = 50;
 const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

//let randomNum = Math.floor(Math.random() * 6) + 1;


console.log(randomNum);*/

const button = document.getElementById("rngBtn");
const number1 = document.getElementById("myLabel1");
const number2 = document.getElementById("myLabel2");
const number3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randNum1;
let randNum2;
let randNum3;


button.onclick = function(){
    randNum1 = Math.floor(Math.random() * max) + min;
    randNum2 = Math.floor(Math.random() * max) + min;
    randNum3 = Math.floor(Math.random() * max) + min;
    number1.textContent = randNum1;
    number2.textContent = "," + randNum2 + ",";
    number3.textContent = randNum3;
}