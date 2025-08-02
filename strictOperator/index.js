/*

= assigment operator
== comparison operator (compare values if equal)
=== strictly equality operator ( compare if values and data types are equal)
!= inequality operator
!== strict inequality operator

*/

const PI = 3.14;


// COMPARISON OPERATOR

if(PI == "3.14"){
 console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}

// STRICTLY EQUALITY OPERATOR


if(PI === "3.14"){
 console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}

// INEQUALITY OPERATOR

if(PI != "3.14"){
 console.log("That is not Pi");
}
else{
    console.log("That is Pi");
}


// STRICT INEQUALITY OPERATOR

if(PI !== "3.14"){
  console.log("That is not Pi");
}
else{
    console.log("That is Pi");
}