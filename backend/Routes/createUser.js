const express = require('express');
const router = express.Router();
const User = require('../models/UserData')
const { body, validationResult } = require('express-validator');
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.use(cors());

const jwtSecret = "qfktvrknassbkycawxcysdcsepwfidrn";

// Endpoint logic for sign up

router.post('/signup',
    ([
        body('email').isEmail(),
        body('name', 'Name must be atleast 3 characters').isLength({ min: 3 }),
        body('password', 'Password must be atleast 6 characters').isLength({ min: 6 })
    ]),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(password, salt);

        const userLoginDetails = await User.find({ email: email });

        if (email !== userLoginDetails.email) {
            try {
                await User.create({
                    name: name,
                    email: email,
                    password: securedPassword
                })
                res.json({ success: true });
            } catch (error) {
                console.log(error);
                res.json({ success: false });
            }
        }
        else {
            res.json({ success: false });
            console.log('Email already exists');
        }


    });

// Endpoint logic for login

router.post('/login', async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        const userLoginDetails = await User.findOne({ email: email });
        if (!userLoginDetails) {
            return res.status(400).json({ errors: 'Invalid Email/Password' })
        }

        const comparePwd = await bcrypt.compare(password, userLoginDetails.password);
        if (!comparePwd) {
            return res.status(400).json({ errors: 'Invalid Email/Password' })
        }

        const data = {
            user: {
                id: userLoginDetails.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success: true, authToken: authToken });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});



/*

// FOR FUTURE UDPATES 


// TRYING TO CREATE LOGIN AND SIGN UP VALIDATION ON SAME ENDPOINTS 

// Validation middleware for login form
function validateLogin(req, res, next) {
    // Add your login form validation logic here

    ([
        body('email').isEmail(),
        body('password', 'Password must be atleast 6 characters').isLength({ min: 6 })
    ])
    // You can add more login form validation as needed

    next();
}

// Validation middleware for signup form
function validateSignup(req, res, next) {
    // Add your signup form validation logic here

    ([
        body('email').isEmail(),
        body('name', 'Name must be atleast 3 characters').isLength({ min: 3 }),
        body('password', 'Password must be atleast 6 characters').isLength({ min: 6 })

    ])

    // You can add more signup form validation as needed

    next();
}

router.post('/', (req, res, next) => {
    const { action } = req.body;

    if (action === 'login') {
        validateLogin(req, res, next);
    } else if (action === 'signup') {
        validateSignup(req, res, next);
    }
}, async (req, res) => {
    const { action, name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    if (action === 'login') {

        try {
            const userLoginDetails = await User.findOne({ email: email });
            console.log(userLoginDetails);
            if (!userLoginDetails) {
                return res.status(400).json({ errors: 'Invalid Email/Password' })
            }

            if (password !== userLoginDetails.password) {
                return res.status(400).json({ errors: 'Invalid Email/Password' })
            }

            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }

    else if (action === 'signup') {

        try {
            await User.create({
                name: name,
                email: email,
                password: password
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    } else {
        res.json({ success: false })
    }

});
*/
module.exports = router;