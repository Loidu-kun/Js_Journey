// In this activity I will trying to make a basic calcu using basic operators + - * and /

let num1;
let num2;
let result;

document.getElementById("addBtn").onclick = function(){
    num1 = document.getElementById("fNum").value;
    num1 = Number(num1);
    num2 = document.getElementById("sNum").value;
    num2 = Number(num2);
    result = num1 + num2;
    console.log(result);
}

document.getElementById("subBtn").onclick = function(){
    num1 = document.getElementById("fNum").value;
    num1 = Number(num1);
    num2 = document.getElementById("sNum").value;
    num2 = Number(num2);
    result = num1 - num2;
    console.log(result);
}
document.getElementById("mulBtn").onclick = function(){
    num1 = document.getElementById("fNum").value;
    num1 = Number(num1);
    num2 = document.getElementById("sNum").value;
    num2 = Number(num2);
    result = num1 * num2;
    console.log(result);
}
document.getElementById("divBtn").onclick = function(){
    num1 = document.getElementById("fNum").value;
    num1 = Number(num1);
    num2 = document.getElementById("sNum").value;
    num2 = Number(num2);
    result = num1 / num2;
    console.log(result);
}

document.getElementById('answer').onclick = function(){
        document.getElementById("p1").textContent = `The answer is ${result}`
            document.getElementById("fNum").value = "";
            document.getElementById("sNum").value = "";
}

