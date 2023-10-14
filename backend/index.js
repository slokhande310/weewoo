const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
router.use(cors());

const mongoDB = require('./db/conn');
mongoDB();

const hostname = '127.0.0.1';
const port = process.env.PORT || 8000; // Define the port you want to use


// Define your routes and middleware here
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./Routes/createUser'));

app.get('/', (req, res) => {
    res.send('i am backend');
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
