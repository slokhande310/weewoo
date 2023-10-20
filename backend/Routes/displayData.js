const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        res.send(global.popularFoodData);
    } catch (error) {
        console.log(error);
    }
})

router.post('/explore', (req, res) => {
    try {
        // you cannot send more than one res.send so made an array and stored both fetched data
        const response = [
            global.menu_items,
            global.food_category_items
        ];
        res.send(response);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;