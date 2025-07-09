//Gussing the number

const randNum = Math.floor(Math.random() * 10) + 1;
console.log(randNum);
const answer = document.getElementById("myAnswer");
const submit = document.getElementById("myBtn");
const result = document.getElementById("p1");

submit.onclick = function(){
    
    conrrectAnswer = answer.value;
    conrrectAnswer = Number(conrrectAnswer);

    if(randNum == conrrectAnswer){
        result.textContent = "Your guess is correct 🎉"
    }
    else if(isNaN(conrrectAnswer)){
        result.textContent = "Unidentify answer, number only"
    }
    else{
        result.textContent = "❌ Try again"
    }
}