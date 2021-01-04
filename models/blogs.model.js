//jshint esversion:6
const mongoose = require('mongoose');

const date = require('date-and-time')
const now = new Date();

const BlogSchema = new mongoose.Schema({
    //Schema of post goes here
    title: {
        type: String,
    },
    tag: {
        type: String
    },
    content: {
        type: String
    },
    date : {
        type: String,
        required : true,
        default : date.format(now, 'ddd, MMM DD YYYY') 
    }

});
module.exports = mongoose.model('Blog', BlogSchema);