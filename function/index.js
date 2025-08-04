/*
 function - A section of resuable code
            Declare code once, use it whenever we want.
            Call the function to executre that code.
*/

function greeting(userName, age){
    console.log("Betdey Betdey alrayt!!!");
    console.log("Betdey Betdey alrayt!!!");
    console.log(`Betdey mo ${userName} kupal`);
    console.log("Betdey Betdey alrayt!!!");
    console.log(`ikaw ay ${age}, matanda kana boss`);
}

greeting("Boss", 23);
greeting("Spongebob", 60);


function add(x, y){
        let result = x + y;
        return result;
}
let answer = add(34, 35);
console.log(answer);


function difference(a, b){
    return a - b;
}
console.log(difference(5, 2));

function product(j, k){
    return j * k;
}

function quotient(j, k){
    return j / k;
}
console.log(quotient(10, 2));
console.log(product(10, 2));


function isEven(number){
        if(number % 2 === 0){
                return true;
        }
        else{
            return false;
        }
}
console.log(isEven(4));


function Even(num){
      return num % 2 === 0 ? true : false;
}
console.log(Even(5));


function validEmail(email){
    if(email.includes("@")){
            return true;
    }
    else
        return false;
}

console.log(validEmail("iamjohnlloydgmail.com"));