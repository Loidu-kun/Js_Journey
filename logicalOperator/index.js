/*
Logical Operators = used to combine or manipulate boolean values
                    (true or false)

Examples:
            AND = &&
            OR = ||
            NOT = !
*/

const temp = 60;

if(temp <= 0 || temp > 69 ){
    console.log("The weather is Bad");
}
else{
    console.log("The weather is Good");
}


const sunny = true;

if(!sunny){
    console.log("Its sunny outisde")
}
else{
    console.log("Its rainy outside")
}