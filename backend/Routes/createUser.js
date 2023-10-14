const express = require('express');
const router = express.Router();
const User = require('../models/UserData')
const { body, validationResult } = require('express-validator');
const cors = require("cors");
router.use(cors());

router.post('/',
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
    });


// router.post('/', async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }

//     try {
//         const { email, password } = req.body;
//         const userLoginDetails = await User.findOne({ email: email });
//         if (!userLoginDetails) {
//             return res.status(400).json({ errors: 'Invalid Email/Password' })
//         }

//         if (password !== User.password) {
//             return res.status(400).json({ errors: 'Invalid Email/Password' })
//         }

//         res.json({ success: true });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false });
//     }
// });

// router.post('/',
//     ([
//         body('email').isEmail(),
//         body('name', 'Name must be atleast 3 characters').isLength({ min: 3 }),
//         body('password', 'Password must be atleast 6 characters').isLength({ min: 6 })
//     ]), async (req, res) => {
//         const { email, password, action } = req.body;

//         if (action === 'login') {
//             // Handle login logic
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array() })
//             }

//             const { name, email, password } = req.body;

//             try {
//                 await User.create({
//                     name: name,
//                     email: email,
//                     password: password
//                 });
//                 res.json({ success: true });
//             } catch (error) {
//                 console.log(error);
//                 res.json({ success: false });
//             }

//         } else if (action === 'signup') {
//             // Handle signup logic
//             try {

//                 const userLoginDetails = await User.findOne({ email: email });
//                 if (!userLoginDetails) {
//                     return res.status(400).json({ errors: 'Invalid Email/Password' })
//                 }

//                 if (password !== User.password) {
//                     return res.status(400).json({ errors: 'Invalid Email/Password' })
//                 }

//                 res.json({ success: true });
//             } catch (error) {
//                 console.log(error);
//                 res.json({ success: false });
//             }
//         } else {
//             // Handle invalid form data or other actions
//         }
//     });

module.exports = router;