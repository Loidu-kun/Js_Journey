/*
Method Chaining = Calling one method after another in one continuous line of code

*/


// NO METHOD CHAINING

let userName = window.prompt("Enter UserName")

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toLocaleUpperCase();

let extra   = userName.slice(1);
extra = extra.toLocaleLowerCase();

userName = letter + extra;

console.log(userName);

// METHOD CHAINING

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);
