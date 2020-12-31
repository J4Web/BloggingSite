//jshint esversion:6
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/ArticlesDB', { useNewUrlParser:true}, (err)=>
{
    if(!err)
    {
        console.log('MongoDB connection Succeeded.');
    }
    else
    {
        console.log('Error in DB connection: '+ err);
    }
});


require('./blogs.model');