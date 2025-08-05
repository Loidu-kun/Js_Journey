/*

Variable Scope = where a variable is recognized and accessible (local vs global)

Local scope a variable declare inside the scope of a function
Global Scope a variable declase outside of the scope


*/

//Local variable example

function function1(){
    let x = 1; //Local Variable
    console.log(x);
}

function function2(){
    let x = 2; //Local Variable
    console.log(x);
}

function1();
function2();

//Global Variable

let y = 3;

function function3(){
    console.log(y);
}
function function4(){
    console.log(y);
}
function3();
function4();