const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://shubh:shubh@cluster0.2fkxbci.mongodb.net/weewoo?retryWrites=true&w=majority';
const mongoURI = 'mongodb://0.0.0.0:27017/weewoo';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);                                       // connect to Atlas URI
        console.log('connection successful');
        const fetchedData = await mongoose.connection.db.collection("menu");    // access menu collection
        const arr = await fetchedData.find({}).toArray();                       // store fetched data as array in arr
        // console.log(arr);                                                       // display arr
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDB;
