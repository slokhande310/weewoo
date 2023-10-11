const express = require('express');
require('./db/conn');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 8000; // Define the port you want to use


// Define your routes and middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello from ok');
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
