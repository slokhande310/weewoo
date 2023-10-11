const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/employeeRegister').then(()=>{
    console.log('Connection Successful');
}).catch(()=>{
    console.log('Connection Failed');
});
