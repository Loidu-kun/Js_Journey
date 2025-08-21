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


console.log(maxValue);
console.log(minValue);

function getMax(x, y){
    return Math.max(x, y);
}

function getMin(x, y){
    return Math.min(x, y);
}
