let selectedGuesses = [];
let wins = 0;
let losses = 0;
let balance = 0;

const container = document.getElementById("container");
const startPanel = document.getElementById("startPanel");
const startBalanceInput = document.getElementById("startBalance");
const startGameButton = document.getElementById("startGame");
const warningPopup = document.getElementById("warningPopup");
const rollButton = document.getElementById("rollButton");
const guessContainer = document.getElementById("guessContainer");

function showWarning(message) {
    warningPopup.textContent = message;
    warningPopup.classList.add("show");
    setTimeout(() => warningPopup.classList.remove("show"), 2000);
}


startGameButton.addEventListener("click", () => {
    const startBalance = parseInt(startBalanceInput.value, 10);
    if (isNaN(startBalance) || startBalance <= 10) {
        showWarning("Starting balance must be more than 10!");
        return;
    }
    balance = startBalance;
    document.getElementById("balance").textContent = balance;
    startPanel.style.display = "none";
    container.style.display = "block";
});


document.querySelectorAll(".guess-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const number = parseInt(this.dataset.number, 10);
        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
            selectedGuesses = selectedGuesses.filter(n => n !== number);
            const inputDiv = document.getElementById("bet-" + number);
            if (inputDiv) inputDiv.remove();
        } else {
            if (selectedGuesses.length < 3) {
                this.classList.add("selected");
                selectedGuesses.push(number);
                const div = document.createElement("div");
                div.id = "bet-" + number;
                div.innerHTML = `Number ${number}: <input type="number" class="bet-input" data-number="${number}" value="10" min="1">`;
                guessContainer.appendChild(div);
            } else {
                showWarning("You can only choose up to 3 numbers!");
            }
        }
    });
});


rollButton.addEventListener("click", function () {
    const betInputs = document.querySelectorAll(".bet-input");
    if (selectedGuesses.length === 0) {
        showWarning("Choose at least 1 number!");
        return;
    }

    let totalBet = 0;
    const bets = {};
    for (let input of betInputs) {
        const num = parseInt(input.dataset.number, 10);
        const bet = parseInt(input.value, 10);
        if (isNaN(bet) || bet <= 0) {
            showWarning("Enter valid bet for each number!");
            return;
        }
        bets[num] = bet;
        totalBet += bet;
    }

    if (totalBet > balance) {
        showWarning("Not enough balance for all bets!");
        return;
    }

    balance -= totalBet;
    document.getElementById("balance").textContent = balance;


    rollButton.disabled = true;
    let timer = 10;
    const timerInterval = setInterval(() => {
        warningPopup.textContent = `⏱ Wait ${timer} seconds before next bet`;
        warningPopup.classList.add("show");
        timer--;
        if (timer < 0) {
            clearInterval(timerInterval);
            rollButton.disabled = false;
            warningPopup.textContent = "✅ You can bet again!";
            setTimeout(() => warningPopup.classList.remove("show"), 2000);

            selectedGuesses = [];
            guessContainer.innerHTML = "";
            document.querySelectorAll(".guess-btn").forEach(b => b.classList.remove("selected"));
        }
    }, 1000);

  
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    diceResult.textContent = "Rolling...";
    diceImages.innerHTML = "";

    setTimeout(() => {
        let rolledValues = [];
        let imagesHTML = "";
        for (let i = 0; i < 3; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            rolledValues.push(value);
            const isMatch = Object.keys(bets).includes(value.toString());
            imagesHTML += `<img src="dice_img/${value}.png" alt="Dice ${value}" class="${isMatch ? 'highlight bounce spin' : 'bounce spin'}">`;
        }
        diceImages.innerHTML = imagesHTML;

        let winAmount = 0;
        rolledValues.forEach(val => {
            if (bets[val]) winAmount += bets[val] * (selectedGuesses.length === 1 ? 5 : selectedGuesses.length === 2 ? 3 : 2);
        });

        if (winAmount > 0) {
            wins++;
            document.getElementById("winCount").textContent = wins;
            balance += winAmount;
            document.getElementById("balance").textContent = balance;
            diceResult.textContent = `🎉 You won ${winAmount} coins! Rolled: [${rolledValues.join(", ")}]`;
        } else {
            losses++;
            document.getElementById("lossCount").textContent = losses;
            diceResult.textContent = `❌ You lost ${totalBet} coins. Rolled: [${rolledValues.join(", ")}]`;
        }
    }, 1000);
});
