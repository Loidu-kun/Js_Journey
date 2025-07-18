// string metthod = allows us to manipulate and work with text(0strings)

let userName = "Loi du";

console.log(userName.charAt(4)); //This method is used to get or show a specific part of string

console.log(userName.indexOf("i")); // This will return the index of string

console.log(userName.length); // This method is to get the lenght of string

//userName = userName.trim(); // This method is to get rid of unsual white spacing
//console.log(userName);

console.log(userName.toUpperCase()); //This method for upper case the letter
console.log(userName.toLowerCase()); //This method for lower case the letter
console.log(userName.repeat(3));//This method is to repeat specifc string


let result = userName.startsWith(" "); // String method for boolean start
console.log(result);

if(result){
    console.log("Your name can't begin with space")
}
else{
    console.log("Your name is valid");
}

let resultEnd = userName.endsWith("u"); // String method for boolean end

if(resultEnd){
    console.log("Your name is valid");
}
else{
    console.log("Invalid name")
}

let resultInclude = userName.includes(" ");// This will check if there a included empty space at String

if(resultInclude){
    console.log("Your name is Invalid");
}
else{
    console.log("Valid name")
}

let phoneNum = "123-456-7890"

phoneNum = phoneNum.replaceAll("-", ""); //This method to replace a specific string
console.log(phoneNum);

phoneNum = phoneNum.padStart(13, "+63");//  First value of string count
phoneNum = phoneNum.padEnd(); //counter wise
console.log(phoneNum);