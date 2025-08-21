/*

.reduce() = reduce the elements of an array to a single value

*/

const prices = [12, 14, 16, 20, 28];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);//Noted .toFixed is used for adding decimal

function sum(nEw, old){
    return nEw + old;
} 


const grades = [70, 75, 80, 85, 90, 95];

const maxValue = grades.reduce(getMax);
const minValue = grades.reduce(getMin);
const passingGrade = document.getElementById("passing");
const highGrade = document.getElementById("highest");
const listGrade = document.getElementById("gradeList");

console.log(maxValue);
console.log(minValue);

listGrade.textContent = "Here are the list of grades " + grades.join(", ");
highGrade.textContent = "The Highest Grade in this class is " + maxValue;
passingGrade.textContent = "The lowest Grade in this class is " + minValue;

for(let i = 0; i < grades.length; i++){
     console.log(grades[i]);
}

function getMax(x, y){
    return Math.max(x, y);
}

function getMin(x, y){
    return Math.min(x, y);
}


