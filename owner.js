document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '220701171@rajalakshmi.edu.in' && password === 'owner_password') {
        window.location.href = 'owner.html';
    } else if (username.endsWith('@rajalakshmi.edu.in')) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('login-error').textContent = "Invalid username or password!";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Get the Manage Recyclers link by its ID
    const manageRecyclersLink = document.getElementById('manage-recyclers-link');
    
    // Add a click event listener to the link
    manageRecyclersLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Redirect to recycler.html
        window.location.href = 'recycler.html';
    });
});
