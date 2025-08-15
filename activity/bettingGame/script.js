// Open/Close Password Generator
function openGenerator() {
    document.getElementById("passwordModal").style.display = "block";
}
function closeGenerator() {
    document.getElementById("passwordModal").style.display = "none";
}

// Password Generator Logic
function generatePassword() {
    const length = document.getElementById("passLength").value;
    const lowercase = document.getElementById("lowercase").checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    const uppercase = document.getElementById("uppercase").checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = document.getElementById("numbers").checked ? "0123456789" : "";
    const symbols = document.getElementById("symbols").checked ? "!@#$%^&*()_+[]{}|;:,.<>?" : "";

    let chars = lowercase + uppercase + numbers + symbols;
    if (!chars) {
        alert("Select at least one option");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("generatedPassword").value = password;
}

function useGeneratedPassword() {
    const generated = document.getElementById("generatedPassword").value;
    if (generated) {
        document.getElementById("regPassword").value = generated;
        closeGenerator();
    }
}

// Hide/Show Password
function togglePassword() {
    const passInput = document.getElementById("regPassword");
    passInput.type = passInput.type === "password" ? "text" : "password";
}

// Register Function
function register() {
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (username && password) {
        localStorage.setItem(username.toUpperCase(), password);
        document.getElementById("regMessage").textContent = "Registration successful!";
    } else {
        document.getElementById("regMessage").textContent = "Please fill out all fields.";
    }
}
