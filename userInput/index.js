// How to accep user input

// 1. EASY WAY = window prompt
// 2 PROFESSIONAL WAY = HTML textbox


// EASY WAT
// create a window Prompt

//let username;
//username = window.prompt("What is your username?");

let username = window.prompt("What is your page title?");
console.log(username);
document.getElementById("p1").textContent =   `Welcome ${username} page`;


// 2 PROFESSIONAL WAY = HTML textboxStart

let FName;
let LName;

document.getElementById("subBtn").onclick = function(){
    FName = document.getElementById("fName").value;
    LName = document.getElementById("lName").value;
    console.log(FName, LName);
    document.getElementById("p2").textContent = `Your fullname is ${FName} ${LName}`
    document.getElementById("p3").textContent = "Your fullname is " + FName + LName;

}