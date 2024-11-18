document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === '220701171@rajalakshmi.edu.in' && password === '220701171') {
        window.location.href = 'owner.html'; // Redirect to owner page
    } else if (username.endsWith('@rajalakshmi.edu.in')) {
        window.location.href = 'index.html'; // Redirect to user page
    } else {
        document.getElementById('login-error').textContent = "Invalid username or password!";
    }
});
