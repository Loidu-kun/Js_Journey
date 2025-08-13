document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
    const numOfDice = parseInt(document.getElementById("numOfDice").value, 10);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    diceResult.textContent = "Rolling...";
    diceImages.innerHTML = "";

    setTimeout(() => {
        const values = [];
        let imagesHTML = "";

        for (let i = 0; i < numOfDice; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            imagesHTML += `<img src="dice_img/${value}.png" alt="Dice ${value}">`;
        }

        diceResult.textContent = `🎯 You rolled: ${values.join(", ")}`;
        diceImages.innerHTML = imagesHTML;
    }, 500);
}
