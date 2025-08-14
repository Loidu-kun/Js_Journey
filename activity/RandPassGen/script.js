// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-=_+,.";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if(length <= 0){
            return `(password must be atleast 1)`;
    }
    if(allowedChars.length === 0){
        return `(atleast one set of the charactes must be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                    includeLowerCase, 
                                    includeUpperCase, 
                                    includeNumbers, 
                                    includeSymbols);
console.log(`Generated password: ${password} `);