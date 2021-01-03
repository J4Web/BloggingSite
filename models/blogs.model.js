//jshint esversion:6
const mongoose= require('mongoose');

const BlogSchema= new mongoose.Schema({
//Schema of post goes here
    Title : 
    {
        type: String,
    },
    Tag :
    {
        type:String
    },
    Content: {
        type: String
    }

});

mongoose.model('Blog', BlogSchema);

model.exports= mongoose.model('Blog', BlogSchema);