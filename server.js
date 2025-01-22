const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',     // No need for port here (unless you're using a non-default port)
    port: 3306,            // Explicitly add port if needed (MySQL default is 3306)
    user: 'root',
    password: 'root',      // Your MySQL password
    database: 'service_provider'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Serve HTML Form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle Form Submission
app.post('/submit', (req, res) => {
    const { name, contact, service } = req.body;
    const sql = 'INSERT INTO providers (name, contact, service) VALUES (?, ?, ?)';
    db.query(sql, [name, contact, service], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error.');
            return;
        }
        res.send('<h1>Form submitted successfully!</h1><a href="/">Go Back</a>');
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
