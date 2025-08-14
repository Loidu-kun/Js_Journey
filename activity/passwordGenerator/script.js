function generatePassword(length, lower, upper, numbers, symbols) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const sym = "!@#$%^&*()-=_+,.";
    let allowedChars = "";

    if (lower) allowedChars += lowerCase;
    if (upper) allowedChars += upperCase;
    if (numbers) allowedChars += nums;
    if (symbols) allowedChars += sym;

    if (length <= 0) return "";
    if (!allowedChars) return "";

    let password = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        password += allowedChars[array[i] % allowedChars.length];
    }
    return password;
}

function evaluateStrength(password) {
    if (!password) {
        document.getElementById("strengthText").textContent = "Strength: N/A";
        document.getElementById("strengthFill").style.width = "0";
        return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    let strength = "Weak", color = "red", width = "33%";
    if (score >= 4 && score < 6) {
        strength = "Medium";
        color = "orange";
        width = "66%";
    }
    if (score >= 6) {
        strength = "Strong";
        color = "limegreen";
        width = "100%";
    }

    document.getElementById("strengthText").textContent = `Strength: ${strength}`;
    document.getElementById("strengthFill").style.width = width;
    document.getElementById("strengthFill").style.background = color;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = +document.getElementById("length").value;
    const lower = document.getElementById("lower").checked;
    const upper = document.getElementById("upper").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, lower, upper, numbers, symbols);
    document.getElementById("output").value = password;
    evaluateStrength(password);
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const output = document.getElementById("output");
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
    alert("Password copied!");
});

document.getElementById("output").addEventListener("input", (e) => {
    evaluateStrength(e.target.value);
});

document.getElementById("togglePassword").addEventListener("click", () => {
    const output = document.getElementById("output");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClosed = document.getElementById("eyeClosed");

    if (output.type === "password") {
        output.type = "text";
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
    } else {
        output.type = "password";
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
    }
});
