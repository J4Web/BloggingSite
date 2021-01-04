//jshint esversion:6
const mongoose = require('mongoose');

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
    }

});
module.exports = mongoose.model('Blog', BlogSchema);