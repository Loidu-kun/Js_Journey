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

    // Save to localStorage
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
        // Mark user as logged in
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);

        // Redirect to welcome page
        window.location.href = "welcome.html";
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
}

// Check if logged in (for welcome page)
function checkLogin() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let userDisplay = document.getElementById("userDisplay");

    if (isLoggedIn !== "true") {
        // Not logged in → go to login
        window.location.href = "index.html";
    } else {
        // Show logged-in username
        userDisplay.textContent = localStorage.getItem("currentUser");
    }
}

// Logout function
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
