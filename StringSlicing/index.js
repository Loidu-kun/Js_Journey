/* string slicing = creating a substring
                    form a portion string
                    string.slice(start, end)
*/

const FullName = "John Lloyd Dacanay";

let firstName = FullName.slice(0, 10);
let lastName = FullName.slice(11, 18);

console.log(firstName);
console.log(lastName);

document.getElementById("p1").textContent = `Your Full Name is ${FullName}`;
document.getElementById("p2").textContent = `Your First Name is ${firstName}`;
document.getElementById("p3").textContent = `Your Last Name is ${lastName}`;

//To make it more dynamic

let FName = FullName.slice(0, FullName.indexOf(" ") + 6);
let LName = FullName.slice(FullName.indexOf(" ") + 7);
console.log(FName);
console.log(LName);

//EXCERCISE

const email = "admin123@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);

document.getElementById("p4").textContent = `Your Email is ${email}`;
document.getElementById("p5").textContent = `Your User Name is ${userName}`;
document.getElementById("p6").textContent = `Your Email extension is ${extension}`;