// This file contains the scripts for handling logins

// This is a different API used for user logins
const login_api_url = "https://retoolapi.dev/dV5IYN/data";
// Defining async function
async function check_login() {
  // Storing response
  const response = await fetch(login_api_url);

  // Storing data in the form of JSON
  var data = await response.json();

  // Get the inputted email and password
  const emailText = document.getElementById("EmailText");
  const passwordText = document.getElementById("PasswordText");

  let loginSuccessful = false; // Add a flag to track login status

  data.forEach(function(account) {
    if (emailText.value == account.email && passwordText.value == account.password) {
      alert("Welcome " + account.first_name + ".");

      // Set the session to logged in
      console.log("Setting session to logged in");
      sessionStorage.setItem('userStatus', 'loggedIn');

      window.location.href = "menupopular.html";

      loginSuccessful = true; // Mark login as successful
    }
  });

  // If login was not successful, display an error alert
  if (!loginSuccessful) {
    alert("Incorrect login information. Please try again.");
  }
}

