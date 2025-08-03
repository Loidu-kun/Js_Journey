/*
 while loop = repeat code WHILE some condition is true


*/


// While Loop
// let userName = "";

// while(userName === "" || userName === null){
//    userName = window.prompt("What is your name");

// }
// console.log(`Hello ${userName}`);

// Do-While Loop
let log = true;
let userName;
let password;

do{
    userName = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if(userName === "Admin" && password === 'admin123'){
            log = true;
            console.log(`Welcome ${userName}`);
    }else
        console.log("Invalid Input");

}while(!log)