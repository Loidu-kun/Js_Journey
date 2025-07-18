/*
    Switch = can be a efficient replacement to many else if statements.
             mostly used for multiple condition statement.
*/

let day = "meow";

switch(day){
        case 1:
            console.log("Monday");
            break; //  to break out the switch if condition is already achieved
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log(`${day} is not a day`);
}

let score = 69;
let grade;

switch(true){
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    default:
        grade = "FAILED"        
}

console.log(`Your remarks is ${grade}`);