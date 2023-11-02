const express = require('express');
const router = express.Router();
const order = require('../models/Orders');

router.post('/orderdata', async (req, res) => {

    let data = req.body.order_data;
    await data.splice(0, 0, { order_date: req.body.order_date });
    await data.splice(1, 0, { totalAmount: req.body.totalAmount });

    let emailID = await order.findOne({ 'email': req.body.email });
    if (emailID == null) {
        try {
            await order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error);
            res.send('Server Error', error.message);
        }
    } else {
        try {
            await order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                });
        } catch (error) {
            console.log(error);
            res.send('Server Error', error.message);
        }
    }
});


router.post('/myorders', async (req, res) => {
    try {
        let myData = await order.findOne({ 'email': req.body.email });
        if (myData) {
            let ordered_data = myData.order_data.reverse();
            res.status(200).json({ ordered_data: ordered_data })
        } else {
            res.status(200).send('No orders placed yet');
        }

    } catch (error) {
        console.log(error);
        res.send('Server Error', error.message);
    }
});

module.exports = router;