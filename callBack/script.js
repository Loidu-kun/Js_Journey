/*

callback = a function that is passed as an argument to another function

            used to handle synchronous operations:
            1, Reading a file
            2 Network Requests
            3. Interacting with databases

            Heyy, when you're done, call this next.
*/  

function hello(callback){
    console.log(`Hello`);
    callback();
}

function wait(){
    console.log(`Wait`);
}

function leave(){
    console.log(`Leave`);
}

function bye(){
    console.log(`ByeBye`);
}

hello(wait);


function sum(cBack, x, y){
    let result = x + y;
    cBack(result);
}

function display(result){
    console.log(result);
}

sum(display, 1, 2);




function pageDisplay(result){
    document.getElementById("myH1").textContent = result;
}
sum(pageDisplay, 1, 2);