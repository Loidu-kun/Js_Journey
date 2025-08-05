//TEMP Conversion


const textBox = document.getElementById("txtBox");
const Fah = document.getElementById("toFah");
const Cel = document.getElementById("toCel");
const result = document.getElementById("result");

let temp;

function convert(){

    if(Fah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} °F`;

    }
    else if(Cel.checked){
         temp = Number(textBox.value);
         temp = (temp - 32) * (5/9);
         result.textContent = `${temp.toFixed(1)} °C`;
    }
    else{
        result.textContent = "Kindly Select Unit";
    }
}