/* Check if the user is logged in before allowing access to a protected page */
function checkAccess() {
  const userStatus = sessionStorage.getItem('userStatus');
  if (userStatus !== 'loggedIn') {
    // User is not logged in, show an alert and then redirect to the login page
    alert('Please log in to access this page.');
    window.location.href = '/login.html'; // Replace with your login page URL
  }
}

// Call checkAccess on page load to restrict access to this page
window.onload = checkAccess;

/* Script to post new notes via API */
