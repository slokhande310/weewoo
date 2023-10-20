const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shubh:shubh@cluster0.2fkxbci.mongodb.net/weewoo?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://0.0.0.0:27017/weewoo';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);                                                   // connect to Atlas URI
        console.log('connection successful');

        const menuData = await mongoose.connection.db.collection("menu");                    // access menu collection
        const menuDataArr = await menuData.find({}).toArray();                               // store fetched data as array in arr

        const foodCategoryData = await mongoose.connection.db.collection("foodCategory");    // access foodCategory collection
        const foodCategoryDataArr = await foodCategoryData.find({}).toArray();               // store fetched data as array in arr

        const popularFoodData = await mongoose.connection.db.collection("popularfood");    // access popularfood collection
        const popularFoodDataArr = await popularFoodData.find({}).toArray();               // store fetched data as array in arr

        global.menu_items = menuDataArr;                                                    // declare menu_items globally
        global.food_category_items = foodCategoryDataArr;                                   // declare food_category_items globally
        global.popularFoodData = popularFoodDataArr;

        // console.log(global.popularFoodData);
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDB;
