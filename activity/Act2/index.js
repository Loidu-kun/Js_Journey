// COUNTER PROGRAM

const decBtn = document.getElementById("decrease");
const resBtn = document.getElementById("reset");
const incBtn = document.getElementById("increase");
const countLabel = document.getElementById("count");

let counts = 0;

decBtn.onclick = function(){
    counts--;
    countLabel.textContent = counts;
}

incBtn.onclick = function(){
    counts++;
    countLabel.textContent = counts;
}

resBtn.onclick = function(){
    counts = 0;
    countLabel.textContent = counts;
}