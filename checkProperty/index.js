/*

CHECKED PROPERY = property that determines the checked state of an HTML checkbox or radio button element

*/

 const myCb = document.getElementById("cBox");

const card1 = document.getElementById("r1");
const card2 = document.getElementById("r2");
const card3 = document.getElementById("r3");
const button = document.getElementById("myBtn");

const subP = document.getElementById("p1");
const mainP = document.getElementById("p2");

button.onclick = function() {

    if(myCb.checked){
            subP.textContent = "Thanks for subscribing";
    }
    else{
            subP.textContent = "You did not subscribe";
    }
    if(card1.checked){
            mainP.textContent = "Your payment is via Visa Card";
    }
    else if(card2.checked){
            mainP.textContent = "Your payment is via Master Card";
    }
    else if(card3.checked){
            mainP.textContent = "Your payment is via Credit Card";
    }
    else{
        mainP.textContent = "No payment selected";
    }
}