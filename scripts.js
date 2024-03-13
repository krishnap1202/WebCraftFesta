// scripts.js
// Dummy authentication function
function authenticate(username, password) {
    // Dummy credentials (for demonstration purposes)
    const validCredentials = {
      username: "user",
      password: "pass"
    };
  
    // Check if provided credentials match the valid credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      return true;
    } else {
      return false;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (authenticate(username, password)) {
        alert("Login successful!");
        // Redirect to home page or display appropriate content
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  