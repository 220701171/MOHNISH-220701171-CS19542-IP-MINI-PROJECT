// Handle Donation Form Submission
document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Generate a rough donation ID
    const roughDonationID = "EW" + Math.floor(Math.random() * 1000000);

    // Display success message in the popup
    document.getElementById("success-message").innerText = "Successfully registered!";
    document.getElementById("generated-id").innerText = "Your Donation ID: " + roughDonationID;

    // Display the rough Donation ID below the condition field
    document.getElementById("donation-id-message").innerText = "Your Donation ID: " + roughDonationID;

    // Show the popup
    const modal = document.getElementById("success-modal");
    modal.style.display = "block";

    // Close the popup when the user clicks on the close button
    document.querySelector(".close-btn").onclick = function() {
        modal.style.display = "none";
    };

    // Close the popup when the user clicks outside of the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Reset the form fields
    document.getElementById("donation-form").reset();
});

// Handle User Details Form Submission
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to server
    fetch('/submit-user-details', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, show a success message or redirect
        // Example: window.location.href = '/success-page';
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optionally, show an error message to the user
        // Example: alert('There was a problem with the submission.');
    });
});
