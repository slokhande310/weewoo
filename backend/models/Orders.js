const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    order_data: {
        type: Array,
        required: true
    }
});

const userOrderData = mongoose.model('order', orderSchema);
module.exports = userOrderData;