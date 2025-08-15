// Register function
function register() {
    let username = document.getElementById("regUsername").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let message = document.getElementById("regMessage");

    if (username === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    message.textContent = "Registration successful!";
    message.style.color = "green";
}

// Login function
function login() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let message = document.getElementById("loginMessage");

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);
        window.location.href = "betGame.html";
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
}

// Check login for game page
function checkLogin() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "index.html";
    } else {
        let userName = localStorage.getItem("currentUser") || "";
        document.getElementById("userDisplay").textContent = userName.charAt(0).toUpperCase() + userName.slice(1);
    }
}

// Logout
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
