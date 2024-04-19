// Handle form submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the value of the email input
    const email = document.getElementById('emailOrPhone').value;

    // Redirect the user to the next page with the email as a query parameter
    window.location.href = 'next_page.html?email=' + encodeURIComponent(email);
});
