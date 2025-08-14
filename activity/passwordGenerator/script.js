function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-=_+,.";
    let allowedChars = "";
    let password = "";

    if (includeLowerCase) allowedChars += lowerCase;
    if (includeUpperCase) allowedChars += upperCase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;

    if (length <= 0) return "";
    if (!allowedChars) return "";

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
        document.getElementById("strengthFill").style.width = "0%";
        return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    let strengthText = "Weak";
    let color = "red";
    let width = "33%";

    if (score >= 4 && score < 6) {
        strengthText = "Medium";
        color = "orange";
        width = "66%";
    }
    if (score >= 6) {
        strengthText = "Strong";
        color = "limegreen";
        width = "100%";
    }

    document.getElementById("strengthText").textContent = `Strength: ${strengthText}`;
    const fill = document.getElementById("strengthFill");
    fill.style.width = width;
    fill.style.background = color;
}

function generate() {
    const length = document.getElementById("length").value;
    const lower = document.getElementById("lower").checked;
    const upper = document.getElementById("upper").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    const output = document.getElementById("output");

    const password = generatePassword(length, lower, upper, numbers, symbols);
    output.value = password;
    evaluateStrength(password);
}

function copyPassword() {
    const output = document.getElementById("output");
    if (output.value) {
        navigator.clipboard.writeText(output.value)
            .then(() => alert("Password copied to clipboard!"))
            .catch(() => alert("Failed to copy password."));
    }
}

// Toggle password visibility with icon change
document.getElementById("togglePassword").addEventListener("click", () => {
    const output = document.getElementById("output");
    const toggleBtn = document.getElementById("togglePassword");

    if (output.type === "password") {
        output.type = "text";
        toggleBtn.innerHTML = "&#128065;"; // normal eye
    } else {
        output.type = "password";
        toggleBtn.innerHTML = "&#128584;"; // slashed/closed eyes style
    }
});

// Event listeners
document.getElementById("generateBtn").addEventListener("click", generate);
document.getElementById("copyBtn").addEventListener("click", copyPassword);
document.getElementById("output").addEventListener("input", (e) => evaluateStrength(e.target.value));

// Initially, no password generated — just placeholder
evaluateStrength("");
