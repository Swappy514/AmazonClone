// Handle form submission
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Retrieve the user's name from the input field
    const name = document.getElementById('name').value;

    // Store the user's name in local storage
    localStorage.setItem('username', name);

    // Redirect to the home page
    window.location.href = 'Amazon.html';
});
