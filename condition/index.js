// IF STATEMENTS = If a condition is true, execute the output
//                  if not, do something else

let age = 30;

if(age >= 40){
    console.log(age);
}
else{
    console.log("You're still a minor");
}

let time = 13;

if(time <= 12){
    console.log("Good Morning");
}
else{
    console.log("Good afternoon");
}

// NESTED IF STATEMENT

let Age = 25;
let licence = false;

if(Age >= 16){
    console.log("You can dirve");

    if(licence){
        console.log("You have your license");
    }
    else{
        console.log("Dont have a license");
    }
}
else{
    console.log("Not eligible for license");
}

// ELSE IS STATEMENT

// == && ||

let edad = 100;
let license = true;

if(edad > 17 && edad < 99){
    console.log("You can get a license");
}
else if(edad == 0){
    console.log("Unidentified Age");
}
else if(edad >= 100){
    console.log("Too old to drive");
}
else{
    console.log("Must be 18+ to have license");
}
// activity

const userAge = document.getElementById("myAge");
const button = document.getElementById("myBtn");
const result = document.getElementById("p");

button.onclick = function(){

    AGE = userAge.value;
    AGE = Number(AGE);

    if(AGE >= 18 && AGE < 60){
        result.textContent = "You can get license and drive";
    }
    else if(AGE == 0){
         result.textContent = "Unidentified License";
    }
    else{
        result.textContent = "You cannot get a license";
    }
}