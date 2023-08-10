// This file contains the scripts for handling logins

// This is a different API used for 
const api_url = "https://retoolapi.dev/6570HK/data";

// Defining async function
async function check_login() {
  // Storing response
  const response = await fetch(api_url);

  // Storing data in form of JSON
  var data = await response.json();

  // Get the inputted email and password
  const emailText = document.getElementById("EmailText")
  const passwordText = document.getElementById("PasswordText")

    
  data.forEach(function(account){
    if(emailText.value == account.email && passwordText.value == account.password) {
      alert("Login successful")
    
      // Set the session to logged in
      console.log("Setting session to logged in")
      sessionStorage.setItem('loggedIn', true)

      // Task: What should happen once the user has logged in? Do they go to a dashboard?

    }
  })
}