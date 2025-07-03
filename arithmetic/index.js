//  ARITHMETIC OPERATORS = Operands (values, variables, etc.)
//                                  operators (+ - * /)
//                                  ex. 11 = x + 5;


let students = 41;
//students = students + 1;  // -> Addition
//students = students - 1;  // -> Subtraction
//students = students * 2;  // -> Mulitplication
//students = students / 2;  // -> Division
//students = students ** 2; // -> Exponential
let extraStudents = students % 3;    // -> Modulus
console.log(students);
console.log(extraStudents);

document.getElementById("p1").textContent = `The total students in this class is ${students}`;
document.getElementById("p2").textContent = `The total students of ${students} can be divided into ${extraStudents} groups`;


// Augmented Assignement Operators

let Students = 31;

//Students += 1;    // Augmented Assignement Operators for Addition
//Students -= 5;    // Augmented Assignement Operators for Subtraction
//Students *= 2;    // Augmented Assignement Operators for Multiplication
//Students /= 10;   // Augmented Assignement Operators for Division
//Students **= 2;   // Augmented Assignement Operators for Exponential
//Students %= 3;    // Augmented Assignement Operators for Modulus

//Students++;         //Increment Operator    
Students--;         //Decrement Operator    

console.log(Students);

/* OPERTOR PRECEDENCE or HEIRACHY
    1.Parenthesis ()
    2 Exponents
    3.Multiplication | Division | Modulo
    4 Adiition & Subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;

//let result = 1 + 2 * 3 + 16;
//let result = 1 + 6 + 16;
//let result = 23;

console.log(result);

let result2 = 12 % 5 + 8 / 2;

//let result2 = 2 + 4;
//let result2 = 6;

console.log(result2);

let result3 = 6 / 2 ** (2 + 5);

//let result3 = 6 / 2 ** 7;
//let result3 = 6 / 128;
//let result3 = 0.046875;

console.log(result3);