const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config(); // For loading environment variables

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files (like HTML, CSS, JS)

// Connect to the SQLite database
const db = new sqlite3.Database('./userdetails.db', (err) => { // Ensure the database file name is correct
    if (err) {
        console.error("Error connecting to database", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { username, itemType, condition } = req.body;

    const query = `INSERT INTO donations (username, itemType, condition) VALUES (?, ?, ?)`;

    db.run(query, [username, itemType, condition], function(err) {
        if (err) {
            console.error("Error inserting data", err.message);
            res.status(500).send("An error occurred while processing your donation.");
            return;
        }
        console.log(`A new donation has been added with ID ${this.lastID}`);
        res.send(`Thank you, ${username}! Your donation ID is ${this.lastID}.`);
    });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username ends with '@rajalakshmi.edu.in'
    if (username.endsWith('@rajalakshmi.edu.in')) {
        res.redirect('/index.html');
    } else if (username === process.env.OWNER_USERNAME && password === process.env.OWNER_PASSWORD) {
        // Use environment variables for sensitive credentials
        res.redirect('/admin.html');
    } else {
        res.status(401).send('Invalid username or password!');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
