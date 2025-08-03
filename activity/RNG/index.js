const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(answer);

let attemp = 0;
let guess;
let run = true;

while(run){

    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    console.log(typeof guess, guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a number");
    }
    else if(guess < min || guess > max){
        window.alert("out of scope answer");
    }
    else{
        attemp++;
        if(guess < answer){
            window.alert("Your guess is to low");
        }
        else if(guess > answer){
            window.alert("Answer is Too high");

        }
        else{
            window.alert(`Nice One The answer was ${answer} It took you ${attemp} attempts`);
             run == false;
        }
    }

   

}